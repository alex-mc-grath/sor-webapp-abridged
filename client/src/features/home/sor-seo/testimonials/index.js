import { useState } from 'react'
import { Layout } from './Style'
import { Testimonial } from './Testimonial'
import { textShort } from './text-testimonials'
import { text } from './text-testimonials'


export const Testimonials = () => {
  return (
    <Layout>
      <h2><span className="gradient-color4 xl">Happy customers</span><br /> speak for us.</h2>

      <Testimonial textShort={textShort[0]} text={text[0]} source="David M. - LinearApp" sourceLocation="Surry Hills - New South Wales, Australia" />
      <Testimonial textShort={textShort[1]} text={text[1]} source="Sammy A. - Packmart" sourceLocation="San Gabriel Valley, California" />
    </Layout>
  )
}
