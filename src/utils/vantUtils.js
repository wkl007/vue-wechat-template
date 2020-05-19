import { ImagePreview } from 'vant'

/**
 * 图片预览
 * @param images
 * @param options
 * @returns {Promise<any>}
 */
export function imagePreView (images, options) {
  return new Promise((resolve, reject) => {
    if (typeof images === 'string') {
      images = [images]
    }
    ImagePreview({
      images,
      showIndex: images.length > 1,
      lazyLoad: true,
      ...options,
      onChange: index => {
        const data = {
          type: 'change',
          index
        }
        resolve(data)
      },
      onClose: item => {
        const data = {
          type: 'close',
          ...item
        }
        resolve(data)
      }
    })
  })
}
