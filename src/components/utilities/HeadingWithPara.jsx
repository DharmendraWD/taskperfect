import React from 'react'

function HeadingWithPara() {
  return (
<div>
    <h1 className="text-2xl text-center text-white sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-3px] leading-tight mb-6">
{label}
</h1>
  <p className="mt-2 text-lg font-medium text-center text-gray-400 sm:text-base leading-relaxed mb-8">
{label}
</p>
</div>
  )
}

export default HeadingWithPara