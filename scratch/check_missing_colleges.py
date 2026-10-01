import re

with open('src/data/colleges.js', 'r', encoding='utf-8') as f:
    col_content = f.read()

college_ids_in_colleges = set(re.findall(r'id:\s*"([^"]+)"', col_content))

with open('src/data/rankCutoffs.js', 'r', encoding='utf-8') as f:
    rc_content = f.read()

rc_colleges = re.findall(r'"collegeId":\s*"([^"]+)",\s*"collegeName":\s*"([^"]+)"', rc_content)
print(f"Total cutoffs: {len(rc_colleges)}")

missing_in_colleges = []
for cid, cname in rc_colleges:
    if cid not in college_ids_in_colleges:
        missing_in_colleges.append((cid, cname))

print(f"Cutoff items whose collegeId is NOT in COLLEGES: {len(missing_in_colleges)}")
unique_missing = sorted(list(set(missing_in_colleges)))
print(f"Unique colleges in cutoffs missing from COLLEGES: {len(unique_missing)}")
for cid, cname in unique_missing:
    print(f" - [{cid}] {cname}")
