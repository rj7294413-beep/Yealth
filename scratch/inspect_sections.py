import re

with open('admissions.html', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.findall(r'<section[^>]*id="([^"]*)"[^>]*>', text)
print('Sections with ID in admissions.html:', sections)
headings = re.findall(r'<h2[^>]*>(.*?)</h2>', text, re.DOTALL)
for h in headings:
    print('H2:', re.sub(r'<[^>]+>', '', h).strip())
