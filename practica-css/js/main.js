// Archivo JS pequeño para añadir interactividad de práctica
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('countBtn')
  const countSpan = document.getElementById('count')
  let count = 0
  if(btn){
    btn.addEventListener('click', ()=>{
      count++
      countSpan.textContent = count
    })
  }

  const form = document.getElementById('demoForm')
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const name = form.elements['name'].value
      alert(`Gracias, ${name}! (formulario simulado)`)
      form.reset()
    })
  }
})
