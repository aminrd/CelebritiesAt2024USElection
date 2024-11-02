import wikipedia
import requests
import json
from tqdm import tqdm
from prepare_celebrity_names import get_names

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

names = get_names()
class_name = "Democrat"

results = []
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

for name in tqdm(names):
    try:
        wiki_image = get_wiki_image(name)
        if wiki_image is None:
            print(f"Error with downloading image for : {name}")
            continue

        img_data = requests.get(wiki_image, headers=headers).content
        if img_data is None or len(img_data) < 1000:
            print(f"Error with downloading image for : {name}")
            continue
        file_name = name_to_filename(name, wiki_image)
        with open(file_name, 'wb') as handler:
            handler.write(img_data)

        javascript_line = f'new {class_name}("{name}", "{file_name}", ""),\n';
        results.append(javascript_line)
    except:
        print(f"Error with downloading image for : {name}")

with open("output.txt", "w") as f:
    for js_line in results:
        f.write(js_line)

print("Done!")
