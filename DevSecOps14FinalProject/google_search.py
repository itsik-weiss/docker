try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found")

def process_name(name):
    keywords = ['linkedin', 'facebook', 'instagram']
    matching_urls = []
    try:
        urls = [j for j in search(name, tld="co.in", num=10, stop=10, pause=2)]
        for url in urls:
            if any(keyword in url.lower() for keyword in keywords):
                matching_urls.append(url)
    except Exception as e:
        print(f"An error occurred: {e}")
    return matching_urls
