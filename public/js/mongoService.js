// MongoDB Service client for Fancy Furniture Content Descriptions and Updates

export class MongoService {
  static async getStatus() {
    try {
      const res = await fetch('/api/mongodb/status');
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn('Could not fetch MongoDB status:', e);
    }
    return { configured: false, connected: false };
  }

  // Content Descriptions
  static async getContentDescription(productId) {
    try {
      const res = await fetch(`/api/mongodb/content-descriptions/${productId}`);
      if (res.ok) {
        const data = await res.json();
        return data.description || null;
      }
    } catch (e) {
      console.warn(`Failed to fetch MongoDB description for ${productId}:`, e);
    }
    return null;
  }

  static async saveContentDescription(productId, descriptionData) {
    try {
      const res = await fetch(`/api/mongodb/content-descriptions/${productId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(descriptionData)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.error('Error saving MongoDB content description:', e);
    }
    return { success: false, error: 'Network or server error' };
  }

  // Product Updates
  static async getProductUpdates(productId = null) {
    try {
      const url = productId ? `/api/mongodb/updates?productId=${productId}` : '/api/mongodb/updates';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data.updates || [];
      }
    } catch (e) {
      console.warn('Failed to fetch MongoDB updates:', e);
    }
    return [];
  }

  static async createProductUpdate(updateData) {
    try {
      const res = await fetch('/api/mongodb/updates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.error('Error creating MongoDB update:', e);
    }
    return { success: false, error: 'Network or server error' };
  }

  // Site Announcements & Content
  static async getSiteContent() {
    try {
      const res = await fetch('/api/mongodb/site-content');
      if (res.ok) {
        const data = await res.json();
        return data.content || null;
      }
    } catch (e) {
      console.warn('Failed to fetch MongoDB site content:', e);
    }
    return null;
  }

  static async saveSiteContent(contentData) {
    try {
      const res = await fetch('/api/mongodb/site-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentData)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.error('Error saving MongoDB site content:', e);
    }
    return { success: false, error: 'Network or server error' };
  }
}
