python3 -c "
import os, re
for root, dirs, files in os.walk('.'):
    # Only look in posts and your assets config; skip the _site folder
    if '_site' in root or '.git' in root: continue
    for f in files:
        if f.endswith(('.md', '.html', '.xml', '.yml')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                data = file.read()
            # Regex: finds your internal path and replaces underscores only inside that match
            new_data = re.sub(r'(/assets/wp-content/uploads/[^\s\)\"\'>]+)', 
                              lambda m: m.group(1).replace('_', '-'), data)
            if data != new_data:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(new_data)
                print(f'Fixed internal links in: {path}')
"
