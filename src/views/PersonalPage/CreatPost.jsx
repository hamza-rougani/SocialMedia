import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/Sidebar'

function CreatPost() {
  const F = useRef(null)
  const [items, setItems] = useState([])
  const [Link, setValLink] = useState({title:null,val:null})
  const [style, setStyle] = useState({type:'',index:''})
  const [display, setDis] = useState(false)
  const [displaySty, setDisSty] = useState(false)
  useEffect(() => {
    window.addEventListener('click', listener)
  }, [])
  const listener = (e) => {

      if (!F.current.contains(e.target) && e.target.className != 'btnP2' && e.target.className != 'btnPl' && e.target.className != 'bx bx-plus' && e.target.className != 'bx bx-circle-three-quarter') {
        setDis(false)
        setDisSty(false)
      }
    
    

  }
  console.log(items)
  console.log(style)
  const handelClick = (e) => {
    setItems((el) => {
      const Newitems = [...el];
      return Newitems.filter((it, index) => index != e)
    })
  }
  const handelAdd = (e) => {
    console.log(e)
    setItems((el) => {
      const newItems = [...el]
      newItems[e.index].value = e.value
      return newItems
    })
  }
  const handelStyle = (e) => {
    setItems((el) => {
      console.log(e.type)
      const newItems = [...el]
      const style = newItems[e.index].style ?newItems[e.index].style :{}
      switch(e.type){
        case 'color':
          newItems[e.index].style = {...style,color:e.value}
          break;
        case 'background':
          newItems[e.index].style = {...style,background:e.value}
          break;
        case 'width':
            newItems[e.index].style = {...style,width:e.value+'%'}
          break;
        case 'size':
            newItems[e.index].style = {...style,fontSize:e.value+'px'}
          break;
        case 'weight':
            newItems[e.index].style = {...style,fontWeight:e.value}
          break;
      }
      
      return newItems
    })
  }
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const autoResize = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };
  return (
    <div className='conty'>
      <Sidebar />
      <div className='ContainerDash'>
        <div className='headerC'>
          <h1>Create post</h1>
          <div className='btns'>

            <button id='upload'>Upload Image</button>
            <button id='create'>Create Post</button>
          </div>

        </div>
        <div className='contentDash'>
          <div className='contentD'>
            <div className='contentSec'>
              {/* <input type="text" id='input' placeholder='select title' /> */}

              {items ?
                items.map((el,index) => {
                  switch (el.type) {
                    case 'input':
                      return (
                        <div className='item'>
                          <input id='input' style={el.style} onChange={(e) => handelAdd({ index: index, value: e.target.value })} type='text' placeholder='text' />
                          <div className='fetBtn'>
                          <button className='btnPl delete' onClick={() => handelClick(index)}><i class='bx bx-x'></i></button>
                          {displaySty==index && typeof(displaySty)=='number'?
                            <div className='featurs' >
                              <input type="text" id='in' ref={F} placeholder='search ...' />
                              <ul>
                                <li onClick={() => setStyle({type:'color',index:index})}><i class='bx bx-color'></i></li>
                                <li onClick={() => setStyle({type:'background',index:index})}><i class='bx bx-brush'></i></li>
                                <li onClick={() => setStyle({type:'size',index:index})}><i class='bx bx-font-size' ></i></li> 
                                <li onClick={() => setStyle({type:'weight',index:index})}><i class='bx bx-bold' ></i></li> 

                              </ul>
                            </div>
                            : <button onClick={() => setDisSty(index)} className='btnPl style'><i class='bx bx-circle-three-quarter'></i></button>}
                             {style && style.index==index?
                             <>
                               {style.type=='color' && <input type='color' onChange={(e)=>handelStyle({index:index,value:e.target.value,type:style.type=='color'?'color':'background'})}></input>} 
                               {style.type=='width' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'width'})} id="">
                                <option value="100">100%</option>
                                <option value="90">90%</option>
                                <option value="80">80%</option>
                                <option value="70">70%</option>
                                <option value="60">60%</option>
                                <option value="50">50%</option>
                                </select>
                               }
                               {style.type=='size' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'size'})} id="">
                                <option value="30">30</option>
                                <option value="25">25</option>
                                <option value="20">20</option>
                                <option value="18">18</option>
                                <option value="16">16</option>
                                <option value="14">14</option>
                                <option value="12">12</option>
                                <option value="10">10</option>
                                </select>
                               } 
                               {style.type=='weight' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'weight'})} id="">
                                <option value="0">auto</option>
                                <option value="bold">bold</option>
                                </select>
                               }
                                
                                </>
                            : ''}
                            </div>
                        </div>
                      )
                    case 'file':
                      return (
                        <div className='fs item'>
                        <div className='fetBtn'>
                        <button className='btnPl delete' onClick={() => handelClick(index)}><i class='bx bx-x'></i></button>
                        {displaySty==index && typeof(displaySty)=='number'?
                            <div className='featurs' >
                              <input type="text" id='in' ref={F} placeholder='search ...' />
                              <ul>
                              <li onClick={() => setStyle({type:'color',index:index})}><i class='bx bx-color'></i></li>
                              <li onClick={() => setStyle({type:'width',index:index})}><i class='bx bx-space-bar'></i></li>

                                
                              </ul>
                            </div>
                            : <button onClick={() => setDisSty(index)} className='btnPl style'><i class='bx bx-circle-three-quarter'></i></button>}
                             {style && style.index==index?
                             <>
                               {style.type=='color' && <input type='color' onChange={(e)=>handelStyle({index:index,value:e.target.value,type:style.type=='color'?'color':'background'})}></input>} 
                               {style.type=='width' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'width'})} id="">
                                <option value="100">100%</option>
                                <option value="90">90%</option>
                                <option value="80">80%</option>
                                <option value="70">70%</option>
                                <option value="60">60%</option>
                                <option value="50">50%</option>
                                </select>
                               }
                               {style.type=='size' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'width'})} id="">
                                <option value="20">20</option>
                                <option value="18">18</option>
                                <option value="16">16</option>
                                <option value="14">14</option>
                                <option value="12">12</option>
                                <option value="10">10</option>
                                </select>
                               } 
                                
                                </>
                            : ''}
                           
                            </div>
                          <input onChange={(e) => handelAdd({index:index,value:e.target.files[0] })} type='file' id={'file'+index} style={{display:'none'}}/>
                         {el.value ? <div className='imageUp' style={el.style}><img src={URL.createObjectURL(el.value)} alt="" /></div>:
                          <div className='upload'>
                          <p>Lorem ipsum dolor adipisicing elit. Optio eos facilis voluptatum ad omnis laborum in saepe unde, quod.</p>
                          <label htmlFor={'file'+index}>Upload File</label>
                          </div>
                          }
                        </div>
                      )
                    case 'textarea':
                      return (
                        <div className='item'> 
                         <textarea id='input'
                        style={el.style}
                        className="auto-resize-textarea"
                        
                        onChange={handleChange}
                        onInput={(e) => autoResize(e.target)}
                      />
                      <div className='fetBtn'>
                      <button className='btnPl delete' onClick={() => handelClick(index)}><i class='bx bx-x'></i></button>

                       {displaySty==index && typeof(displaySty)=='number'?
                            <div className='featurs' >
                              <input type="text" id='in' ref={F} placeholder='search ...' />
                              <ul>
                              <li onClick={() => setStyle({type:'color',index:index})}><i class='bx bx-color'></i></li>
                                <li onClick={() => setStyle({type:'background',index:index})}><i class='bx bx-brush'></i></li>
                                <li onClick={() => setStyle({type:'size',index:index})}><i class='bx bx-font-size' ></i></li> 
                                <li onClick={() => setStyle({type:'weight',index:index})}><i class='bx bx-bold' ></i></li> 

                            </ul>
                                                             
                            </div>
                            : <button onClick={() => setDisSty(index)} className='btnPl style'><i class='bx bx-circle-three-quarter'></i></button>}
                             {style && style.index==index?
                             <>
                               {style.type=='color' || style.type=='background' ? <input type='color' onChange={(e)=>handelStyle({index:index,value:e.target.value,type:style.type=='color'?'color':'background'})}></input>:''} 
                               {style.type=='width' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'width'})} id="">
                                <option value="100">100%</option>
                                <option value="90">90%</option>
                                <option value="80">80%</option>
                                <option value="70">70%</option>
                                <option value="60">60%</option>
                                <option value="50">50%</option>
                                </select>
                               }
                               {style.type=='size' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'size'})} id="">
                                <option value="20">20</option>
                                <option value="18">18</option>
                                <option value="16">16</option>
                                <option value="14">14</option>
                                <option value="12">12</option>
                                
                                </select>
                               } 
                               {style.type=='weight' && 
                               <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'weight'})} id="">
                                <option value="0">auto</option>
                                <option value="bold">bold</option>
                                </select>
                               }
                                
                                </>
                            : ''}
                            </div>
                      </div> 
                      )
                      case 'link':
                        return (
                          <div className='fs item'>
                          <div className='fetBtn'>
                          <button className='btnPl delete' onClick={() => handelClick(index)}><i class='bx bx-x'></i></button>
                          {displaySty==index && typeof(displaySty)=='number'?
                              <div className='featurs' >
                                <input type="text" id='in' ref={F} placeholder='search ...' />
                                <ul>
                                <li onClick={() => setStyle({type:'color',index:index})}><i class='bx bx-color'></i></li>
                                <li onClick={() => setStyle({type:'width',index:index})}><i class='bx bx-space-bar'></i></li>
  
                                  
                                </ul>
                              </div>
                              : <button onClick={() => setDisSty(index)} className='btnPl style'><i class='bx bx-circle-three-quarter'></i></button>}
                               {style && style.index==index?
                               <>
                                 {style.type=='color' && <input type='color' onChange={(e)=>handelStyle({index:index,value:e.target.value,type:style.type=='color'?'color':'background'})}></input>} 
                                 {style.type=='width' && 
                                 <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'width'})} id="">
                                  <option value="100">100%</option>
                                  <option value="90">90%</option>
                                  <option value="80">80%</option>
                                  <option value="70">70%</option>
                                  <option value="60">60%</option>
                                  <option value="50">50%</option>
                                  </select>
                                 }
                                 {style.type=='size' && 
                                 <select name="" onChange={(e)=>handelStyle({index:index,value:e.target.value,type:'width'})} id="">
                                  <option value="20">20</option>
                                  <option value="18">18</option>
                                  <option value="16">16</option>
                                  <option value="14">14</option>
                                  <option value="12">12</option>
                                  <option value="10">10</option>
                                  </select>
                                 } 
                                  
                                  </>
                              : ''}
                             
                              </div>
                           {el.value ?<div id='input'><span>{el.value.title} : </span><a href={el.value.val} style={el.style}>{el.value.val}</a></div>:
                            <div className='upload'>
                            <p>Lorem ipsum dolor adipisicing elit. Optio eos facilis voluptatum ad omnis laborum in saepe unde, quod.</p>
                            <input onChange={(e)=>setValLink({...Link,title:e.target.value})} type="text" placeholder='title'/>
                            <input onChange={(e)=>setValLink({...Link,val:e.target.value})} type="text" placeholder='typing url link here'/>
                            <button onClick={() => handelAdd({index:index,value:Link})}>Apply link</button>
                            </div>
                            }
                          </div>
                        )
                  }
                })
                : ''}
              <div className='contS'>
                {display ?
                  <div className='featurs' >
                    <input type="text" id='in' ref={F} placeholder='search ...' />
                    <ul>
                      <li onClick={() => setItems([...items, { type: 'input' }])}><i class='bx bx-text'></i></li>
                      <li onClick={() => setItems([...items, { type: 'file' }])}><i class='bx bx-image-alt'></i></li>
                      <li onClick={() => setItems([...items, { type: 'youtube' }])}><i class='bx bxl-youtube' ></i> </li>
                      <li><i class='bx bx-table' ></i></li>
                      <li><i class='bx bx-color'></i></li>
                      <li onClick={() => setItems([...items, { type: 'textarea' }])}><i class='bx bx-paragraph' ></i></li>
                      <li onClick={() => setItems([...items, { type: 'link' }])}><i class='bx bx-link' ></i></li>

                    </ul>
                  </div>
                  : <button onClick={() => setDis(true)} className='btnP2'><i class='bx bx-plus'></i></button>}

              </div>
            </div>

          </div>
          <div className='fet'>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CreatPost