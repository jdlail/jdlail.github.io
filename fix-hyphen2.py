python3 -c "
import os, re
for root, dirs, files in os.walk('.'):
    if any(x in root for x in ['_site', '.git']): continue
    for f in files:
        if f.endswith(('.md', '.html', '.xml', '.yml')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                data = file.read()
            # This targets the URL path /assets_c/ and flips underscores to hyphens
            new_data = re.sub(r'(/assets_c/[^\s\)\"\'>]+)', 
                              lambda m: m.group(1).replace('_', '-'), data)
            if data != new_data:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(new_data)
                print(f'Fixed links in: {path}')
"

