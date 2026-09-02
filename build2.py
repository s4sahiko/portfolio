import os
import base64

def get_base64_images():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    frames_dir = os.path.join(base_dir, 'frames')
    files = sorted([f for f in os.listdir(frames_dir) if f.endswith('.jpg')])
    base64_images = []
    for f in files:
        with open(os.path.join(frames_dir, f), 'rb') as img_file:
            encoded = base64.b64encode(img_file.read()).decode('utf-8')
            base64_images.append(f'"data:image/jpeg;base64,{encoded}"')
    return ',\n'.join(base64_images)

base_dir = os.path.dirname(os.path.abspath(__file__))
template_path = os.path.join(base_dir, 'template.html')
index_path = os.path.join(base_dir, 'index.html')

with open(template_path, 'r') as f:
    template = f.read()

frames_str = get_base64_images()
output_html = template.replace('/* INSERT_FRAMES_HERE */', frames_str)

with open(index_path, 'w') as f:
    f.write(output_html)

print("index.html successfully updated with real content and video frames!")

