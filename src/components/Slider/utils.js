import {SLIDE_DIRECTION} from '../../constant'

const swipeLeft = (id, arrayOfImage) => id === 0 ? arrayOfImage.length-1 : id-1;
const swipeRight = (id, arrayOfImage) => id === arrayOfImage.length-1 ? 0 : id+1;

const onKeyPressEvent = (val, id, arrayOfImage) => (
  val.code.toLowerCase().includes(SLIDE_DIRECTION) ? swipeLeft(id, arrayOfImage) : swipeRight(id, arrayOfImage)
)


const onClickEvent = (val, id, arrayOfImage) => (
  val.target.className.includes(SLIDE_DIRECTION) ? swipeLeft(id, arrayOfImage) : swipeRight(id, arrayOfImage)
)
  
export const getSliderDirection = (event, id, arrayOfImage) => {
  const checkKeyCode = (event) => Object.values(SLIDE_DIRECTION).includes(event.code.toLowerCase())
  return event.type === 'click' ? onClickEvent(event, id, arrayOfImage) : checkKeyCode(event) ? onKeyPressEvent(event, id, arrayOfImage) : id   
}
  
const getId = (image, arrayOfImage) => arrayOfImage.findIndex(i => i === image);
export const getCurrentImageId = (arrayOfImage, image) => getId(image, arrayOfImage);

export const changeVal = (len, val) => len > 1 ? val : `${val}-disable`