import React from 'react'

const GoogleMap = () => {
  return (
    <div className='overflow-hidden w-full mb-20 rounded-lg'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.310033691959!2d121.02566957332674!3d14.919810685605238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a900174e910d%3A0x7f6722a10b4ddaa7!2sRHC%20Builder&#39;s%20Warehouse%20Angat!5e0!3m2!1sen!2sph!4v1779522890210!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RHC Builder's Warehouse Angat Location Map"
      />
    </div>
  )
}

export default GoogleMap