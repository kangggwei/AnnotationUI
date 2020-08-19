from pathlib import Path
import json
import os
import re

'''
Generates JSON for each part used to feed into React App to display images in output folder, for output folder format, refer to README file
'''

PARTS = ["leftWrist", "rightWrist", "mask", "back"]

for PART in PARTS:
    try:
        img_path = Path(f'./{PART}').resolve()

        filenames = [
                f.path for f in os.scandir(img_path) if f.is_file() and f.path.endswith(('.png', '.jpg'))]

        filenames = list(map(lambda x: os.path.basename(x), filenames))

        files = []

        for f in filenames:
            id_ = re.findall(r'\d+', f)
            files.append({"id": id_[0], "title": f})

        files.sort(key=lambda x: int(x["id"]))

        with open(f'{PART}.json', 'w') as fp:
            json.dump(files, fp)

    except:
        pass
