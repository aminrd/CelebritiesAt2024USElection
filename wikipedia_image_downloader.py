import wikipedia
import requests
import json

WIKI_REQUEST = 'http://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles='

def name_to_filename(name: str, link: str) -> str:
    extention = ".jpg" if "jpg" in link else ".png"
    return "./photos/" + name.replace(' ', '_') + extention

def get_wiki_image(search_term):
    try:
        result = wikipedia.search(search_term, results = 1)
        wikipedia.set_lang('en')
        wkpage = wikipedia.WikipediaPage(title = result[0])
        title = wkpage.title
        response  = requests.get(WIKI_REQUEST+title)
        json_data = json.loads(response.text)
        img_link = list(json_data['query']['pages'].values())[0]['original']['source']
        return img_link
    except:
        return None

names = ["Kid Rock", "Jon Voight", "Kelsey Grammer", "Scott Baio", "Dennis Rodman", "Brett Favre", "Roseanne Barr", "Antonio Sabato Jr.", "Tomi Lahren", "Mike Tyson", "Clint Eastwood", "Kevin Sorbo", "Larry the Cable Guy", "Victoria Jackson", "Mel Gibson", "Chuck Norris", "Sarah Palin", "James Woods", "Caitlyn Jenner", "David L. Rubin", "Burt Reynolds", "Pat Sajak", "John Rich", "Eric Roberts", "Jesse Metcalfe", "Kirk Cameron", "Mike Huckabee", "Alicia Silverstone", "Gary Busey", "Natalie Maines", "Kurt Russell", "Stephen Baldwin", "Lindsey Graham", "Tucker Carlson", "Rick Harrison", "Candace Cameron Bure", "Sean Hannity", "Tom Selleck", "Drew Brees"]
class_name = "Republican"

results = []

for name in names:
    try:
        wiki_image = get_wiki_image(name)
        if wiki_image is None:
            print(f"Error with downloading image for : {name}")
            continue

        img_data = requests.get(wiki_image).content
        if img_data is None:
            print(f"Error with downloading image for : {name}")
            continue
        file_name = name_to_filename(name, wiki_image)
        with open(file_name, 'wb') as handler:
            handler.write(img_data)

        javascript_line = f'new {class_name}("{name}", "{file_name}", ""),';
        results.append(javascript_line)
    except:
        print(f"Error with downloading image for : {name}")

for js_line in results:
    print(js_line)
