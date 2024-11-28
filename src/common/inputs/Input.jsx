import React from 'react'

function Input({lable,name,value,type,onchange,placehoder}) {
    return (
        <>
        {
            type == "text" ? (  <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">{lable}</label>
                <input type={type} name={name} value={value} onChange={onchange} placeholder={placehoder} class="form-control" />
            </div>) :(
                  <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">{lable}</label>
                  <textarea type={type} name={name} value={value} onChange={onchange} placeholder={placehoder} class="form-control" />
              </div>
            )
        }
          
        </>
    )
}

export default Input