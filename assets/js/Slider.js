class Slider{
  constructor(arraySlides=[],currentIndex=0){
    this._arraySlides = arraySlides;
    this.currentIndex = currentIndex;
  }
  get arraySlides(){
    return this._arraySlides;
  }
  set currentIndex(value){
    if(typeof value !== 'number'){
      throw new TypeError('тільки number');
    }
    if(value<0 || Number.isInteger(value)===false){
      throw new RangeError('тільки позитивне і ціле');
    }
    this._currentIndex = value;
  }
  get currentIndex(){
    return this._currentIndex;
  }
  get currentSlide(){
    return this._arraySlides[this._currentIndex];
  }
  get nextIndex(){
    return (this._currentIndex+1)%this._arraySlides.length; 
  }
  get prevIndex(){
    // 0 - 1 + 3 = 2
    return (this._currentIndex-1+this._arraySlides.length)%this._arraySlides.length;
  }
}