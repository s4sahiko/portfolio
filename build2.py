import os
import base64

def get_base64_images():
    frames_dir = '/home/ausu/Desktop/portfolio/frames'
    files = sorted([f for f in os.listdir(frames_dir) if f.endswith('.jpg')])
    base64_images = []
    for f in files:
        with open(os.path.join(frames_dir, f), 'rb') as img_file:
            encoded = base64.b64encode(img_file.read()).decode('utf-8')
            base64_images.append(f'"data:image/jpeg;base64,{encoded}"')
    return ',\n'.join(base64_images)

with open('/home/ausu/Desktop/portfolio/template.html', 'r') as f:
    template = f.read()

frames_str = get_base64_images()
output_html = template.replace('/* INSERT_FRAMES_HERE */', frames_str)

with open('/home/ausu/Desktop/portfolio/index.html', 'w') as f:
    f.write(output_html)

print("index.html successfully updated with real content and video frames!")
