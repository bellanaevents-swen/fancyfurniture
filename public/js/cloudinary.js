// Cloudinary Storage Service for Fancy Furniture

export class CloudinaryService {
  static async getConfig() {
    try {
      const res = await fetch('/api/cloudinary/config');
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn('Could not fetch Cloudinary server config:', e);
    }
    return { configured: false, cloudName: null };
  }

  static async uploadImage(imageInput, folder = 'fancy_furniture') {
    try {
      let imageData = imageInput;

      // If input is a File object, read as base64 Data URL
      if (imageInput instanceof File) {
        imageData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (err) => reject(err);
          reader.readAsDataURL(imageInput);
        });
      }

      const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: imageData,
          folder: folder
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${errorText}`);
      }

      return await response.json();
    } catch (err) {
      console.error('Error uploading image to Cloudinary:', err);
      return {
        success: false,
        error: err.message || 'Image upload failed'
      };
    }
  }

  /**
   * Applies Cloudinary URL transformation parameters
   * e.g. w_600,h_400,c_fill,f_auto,q_auto
   */
  static transformUrl(url, options = {}) {
    if (!url || typeof url !== 'string') return url;
    if (!url.includes('res.cloudinary.com')) return url;

    const { width, height, crop = 'fill', quality = 'auto', format = 'auto' } = options;
    const transforms = [];

    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    if (width || height) transforms.push(`c_${crop}`);
    if (quality) transforms.push(`q_${quality}`);
    if (format) transforms.push(`f_${format}`);

    if (transforms.length === 0) return url;

    const transformString = transforms.join(',');
    return url.replace('/upload/', `/upload/${transformString}/`);
  }

  /**
   * Sample furniture images stored on Cloudinary CDN for instant preview & testing
   */
  static getSampleCloudinaryAssets() {
    return [
      {
        name: 'Transylvanian Solid Oak Table',
        url: 'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/v1/samples/landscapes/beach-boat.jpg',
        category: 'Tables'
      },
      {
        name: 'Luxury Velvet Sofa',
        url: 'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/v1/samples/furniture/sofa.jpg',
        category: 'Sofas'
      },
      {
        name: 'Ergonomic Wooden Chair',
        url: 'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/v1/samples/chair.jpg',
        category: 'Chairs'
      },
      {
        name: 'Aged Pine Sideboard',
        url: 'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/v1/samples/interior/living-room.jpg',
        category: 'Cabinets'
      }
    ];
  }
}
