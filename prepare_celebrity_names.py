existing_list = """
  new Republican("Elon Musk", "./photos/Elon_Musk.jpg", "https://www.independent.co.uk/arts-entertainment/films/news/trump-celebrity-endorsements-buzz-aldrin-elon-musk-b2638749.html"),
  new Republican("Jon Voight", "./photos/Jon_Voight.jpg", "https://variety.com/2024/film/news/jon-voight-trump-support-israel-palestine-angelina-jolie-1236080058/"),
  new Republican("Kelsey Grammer", "./photos/Kelsey_Grammer.jpg", "https://ew.com/kelsey-grammer-interview-cut-after-voicing-support-for-donald-trump-8410830"),
  new Republican("Dennis Rodman", "./photos/Dennis_Rodman.jpg", "https://www.cnn.com/2018/06/11/asia/rodman-trump-kim-summit-intl/index.html"),
  new Republican("Antonio Sabato Jr.", "./photos/Antonio_Sabato_Jr..jpg", "https://www.scmp.com/magazines/style/entertainment/article/3269938/meet-antonio-sabato-jr-who-was-cancelled-hollywood-supporting-donald-trump-general-hospital-actor"),
  new Republican("Mike Tyson", "./photos/Mike_Tyson.jpg", "https://www.sportskeeda.com/mma/news-mike-tyson-endorses-donald-trump-ahead-2024-us-elections-i-agree-sh-t"),
  new Republican("Clint Eastwood", "./photos/Clint_Eastwood.jpg", "https://www.breckell.uk/nowstream1/who-does-clint-eastwood-support-for-president-in-2024.html"),
  new Republican("Larry the Cable Guy", "./photos/Larry_the_Cable_Guy.jpg", "https://easterislandtourism.com/resonatenews3/is-larry-the-cable-guy-a-trump-supporter.html"),
  new Republican("Victoria Jackson", "./photos/Victoria_Jackson.jpg", "https://www.independent.co.uk/arts-entertainment/films/news/trump-celebrity-endorsements-buzz-aldrin-elon-musk-b2638749.html"),
  new Republican("Mel Gibson", "./photos/Mel_Gibson.jpg", ""),
  new Republican("Chuck Norris", "./photos/Chuck_Norris.jpg", ""),
  new Republican("James Woods", "./photos/James_Woods.jpg", ""),
  new Republican("Caitlyn Jenner", "./photos/Caitlyn_Jenner.jpg", ""),
  new Republican("Burt Reynolds", "./photos/Burt_Reynolds.jpg", ""),
  new Republican("Pat Sajak", "./photos/Pat_Sajak.jpeg", ""),
  new Republican("Eric Roberts", "./photos/Eric_Roberts.jpg", ""),
  new Republican("Jesse Metcalfe", "./photos/Jesse_Metcalfe.jpg", ""),
  new Republican("Alicia Silverstone", "./photos/Alicia_Silverstone.jpg", ""),
  new Republican("Natalie Maines", "./photos/Natalie_Maines.jpg", ""),
  new Republican("Kurt Russell", "./photos/Kurt_Russell.jpg", ""),
  new Republican("Stephen Baldwin", "./photos/Stephen_Baldwin.jpg", ""),
  new Republican("Tucker Carlson", "./photos/Tucker_Carlson.jpg", ""),
"""

def get_names():
    with open("input.txt", "r") as f:
        lines = f.readlines()

    array = []
    for line in lines:
        if ',' in line:
            index = line.find(',')
            name = line[:index]
        elif '[' in line:
            index = line.find('[')
            name = line[:index]
        else:
            name = index

        if name not in existing_list:
            array.append(name)

    return array

if __name__ == "__main__":
    print(get_names())
