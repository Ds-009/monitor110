import glob
import os

def find_weights():
    base = os.path.dirname(__file__)
    for ext in ('.pt', '.pth', '.bin', '.h5'):
        files = glob.glob(os.path.join(base, f'*{ext}'))
        if files:
            return files[0]
    return None

if __name__ == '__main__':
    weights = find_weights()
    if not weights:
        print('No model weights found in the model/ folder. Place your .pt/.pth/.bin/.h5 file there.')
    else:
        print(f'Found weights: {weights}')
        try:
            import torch
            model = torch.load(weights, map_location='cpu')
            print('Model loaded (CPU).')
        except Exception as e:
            print('Failed to load with torch:', e)
            print('If your model uses a different framework, adjust predict.py accordingly.')
