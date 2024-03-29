import sys
try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found")

# keywords = ['linkedin', 'facebook', 'instagram']

# query = {usr}


def perform_search(query):
    keywords = ['linkedin', 'facebook', 'instagram']
    urls = [j for j in search(query, tld="co.in", num=10, stop=10, pause=2)]
    for url in urls:
        if any(keyword in url.lower() for keyword in keywords):
            print(url)

# urls = [j for j in search(query, tld="co.in", num=5, stop=5, pause=2)]

# for url in urls:
#     if any(keyword in url.lower() for keyword in keywords):
#         print(url)


if __name__ == "__main__":
    query = ' '.join(sys.argv[1:])
    perform_search(query)
