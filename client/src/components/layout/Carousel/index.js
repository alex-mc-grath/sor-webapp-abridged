import { move } from 'formik'
import React, { useState, useRef } from 'react'

import { useEffect } from 'react'
import { StyledCarousel } from './Style'
import { DragScroll } from './DragScroll'

export const Carousel = () => {


  const el = useRef()
  const wrap = useRef()
  const items = useRef()
  const bar = useRef()


const [progress, setProgress] = useState(0)
const [speed, setSpeed] = useState(0)
const [oldX, setOldX] = useState(0)
const [startX, setStartX] = useState(0)
const [x, setX] = useState(0)
const [playrate, setPlayrate] = useState(0)

const [dragging, setDragging] = useState(0)
const [wrapWidth, setWrapWidth] = useState(0)
const [maxScroll, setMaxScroll] = useState(0)




const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1
const clamp = (val, min, max) => Math.max(min, Math.min(val, max))




  const calculate = () => {
    setProgress(0)
    setMaxScroll(wrapWidth - this.$el.clientWidth)
    setWrapWidth(this.$items[0].clientWidth * this.$items.length)
    // wrap.style.width = `${wrapWidth}px`
    // this.wrapWidth = this.$items[0].clientWidth * this.$items.length
    // this.$wrap.style.width = `${this.wrapWidth}px`
    // this.maxScroll = this.wrapWidth - this.$el.clientWidth
  }


const handleWheel = (e)=> {
    setProgress(e.deltaY)
    move()
  }

const handleTouchStart = (e) =>{
    e.preventDefault()
    setDragging(true)
    setStartX(e.clientX || e.touches[0].clientX)

    el.current.classList.add('dragging')
}

const handleTouchMove  = (e) =>{
    if (!dragging) return false
    const x = e.clientX || e.touches[0].clientX
    setProgress((startX - x) * 2.5)
    setStartX(x)
    move()
  }

const handleTouchEnd = () =>{
    setDragging(true)
    el.current.classList.remove('dragging')
}

const move = () =>{
    setProgress(clamp(progress, 0, maxScroll))
}




//   events() {
//     window.addEventListener('resize', this.calculate)
//     window.addEventListener('wheel', this.handleWheel)
//     //
//     this.$el.addEventListener('touchstart', this.handleTouchStart)
//     window.addEventListener('touchmove', this.handleTouchMove)
//     window.addEventListener('touchend', this.handleTouchEnd)
//     //
//     window.addEventListener('mousedown', this.handleTouchStart)
//     window.addEventListener('mousemove', this.handleTouchMove)
//     window.addEventListener('mouseup', this.handleTouchEnd)
//     document.body.addEventListener('mouseleave', this.handleTouchEnd)
//   }
  
//   raf() {
//     requestAnimationFrame(this.raf)
//     this.x = lerp(this.x, this.progress, 0.1)
//     this.playrate = this.x / this.maxScroll
//     //
//     this.wrap.style.transform = `translateX(${-this.x}px)`
//     this.$bar.style.transform = `scaleX(${.18 + this.playrate * .82})`
//     //
//     this.speed = Math.min(100, this.oldX - this.x)
//     this.oldX = this.x
//     //
//     this.scale = lerp(this.scale, this.speed, 0.1)
//     this.$items.forEach(i => {
//       i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`
//       i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`
//     })
//   }
// }








//     this.$el = document.querySelector(obj.el)
//     this.$wrap = this.$el.querySelector(obj.wrap)
//     this.$items = this.$el.querySelectorAll(obj.item)
//     this.$bar = this.$el.querySelector(obj.bar)
//     this.init()



useEffect(()=>{


// class DragScroll {
//   constructor(obj) {
//     this.$el = document.querySelector(obj.el)
//     this.$wrap = this.$el.querySelector(obj.wrap)
//     this.$items = this.$el.querySelectorAll(obj.item)
//     this.$bar = this.$el.querySelector(obj.bar)
//     this.init()
//   }
  
//   init() {
//     this.progress = 0
//     this.speed = 0
//     this.oldX = 0
//     this.x = 0
//     this.playrate = 0
//     //
//     this.bindings()
//     this.events()
//     this.calculate()
//     this.raf()
//   }
  
//   bindings() {
//     [
//      'events', 
//      'calculate',
//      'raf', 
//      'handleWheel', 
//      'move', 
//      'raf', 
//      'handleTouchStart',
//      'handleTouchMove', 
//      'handleTouchEnd'
//     ].forEach(i => { this[i] = this[i].bind(this) })
//   }
  
//   calculate() {
//     this.progress = 0
//     this.wrapWidth = this.$items[0].clientWidth * this.$items.length
//     this.$wrap.style.width = `${this.wrapWidth}px`
//     this.maxScroll = this.wrapWidth - this.$el.clientWidth
//   }

  
//   handleWheel(e) {
//     this.progress += e.deltaY
//     this.move()
//   }
  
//   handleTouchStart(e) {
//     e.preventDefault()
//     this.dragging = true
//     this.startX = e.clientX || e.touches[0].clientX
//     this.$el.classList.add('dragging')
//   }

//   handleTouchMove(e) {
//     if (!this.dragging) return false
//     const x = e.clientX || e.touches[0].clientX
//     this.progress += (this.startX - x) * 2.5
//     this.startX = x
//     this.move()
//   }

//   handleTouchEnd() {
//     this.dragging = false
//     this.$el.classList.remove('dragging')
//   }
  
//   move() {
//     this.progress = clamp(this.progress, 0, this.maxScroll)
//   }
  
//   events() {
//     window.addEventListener('resize', this.calculate)
//     window.addEventListener('wheel', this.handleWheel)
//     //
//     this.$el.addEventListener('touchstart', this.handleTouchStart)
//     window.addEventListener('touchmove', this.handleTouchMove)
//     window.addEventListener('touchend', this.handleTouchEnd)
//     //
//     window.addEventListener('mousedown', this.handleTouchStart)
//     window.addEventListener('mousemove', this.handleTouchMove)
//     window.addEventListener('mouseup', this.handleTouchEnd)
//     document.body.addEventListener('mouseleave', this.handleTouchEnd)
//   }
  
//   raf() {
//     requestAnimationFrame(this.raf)
//     this.x = lerp(this.x, this.progress, 0.1)
//     this.playrate = this.x / this.maxScroll
//     //
//     this.wrap.style.transform = `translateX(${-this.x}px)`
//     this.$bar.style.transform = `scaleX(${.18 + this.playrate * .82})`
//     //
//     this.speed = Math.min(100, this.oldX - this.x)
//     this.oldX = this.x
//     //
//     this.scale = lerp(this.scale, this.speed, 0.1)
//     this.$items.forEach(i => {
//       i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`
//       i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`
//     })
//   }
// }




// /*--------------------
// Instances
// --------------------*/
// const scroll = new DragScroll({
//   el: '.carousel',
//   wrap: '.carousel .wrap',
//   item: '.carousel .item',
//   bar: '.carousel .progress-bar',
// })




/*--------------------
One raf to rule em all
--------------------*/
const raf = () => {
  requestAnimationFrame(raf)
  // scroll.raf()
  // DragScroll.scroll.raf()
}
raf()

},[])

  return (
    
<StyledCarousel ref={el}>
  <div className="carousel wrap" ref={wrap}>
    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1595265677860-9a3168007dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>South</h2>
    </div>

    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1594786118579-95ba90c801ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>Troker</h2>
    </div>

    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>Slant</h2>
    </div>

    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>Gravy</h2>
    </div>

    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>Amuse</h2>
    </div>

    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1592989819277-a3aafa40c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>Truffle</h2>
    </div>
    
    <div className="item" ref={items}>
      <figure><img src="https://images.unsplash.com/photo-1548374797-d13fd5d2b2a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /></figure>
      <h2>Locker</h2>
    </div>

  </div>
  <div className="carousel progress" ref={bar}>
    <div className="carousel progress-bar"></div>
  </div>
</StyledCarousel>
  )
}

