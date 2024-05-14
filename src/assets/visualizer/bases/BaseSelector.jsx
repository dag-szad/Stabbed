const BaseSelector = ({ changeBase }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const img = new Image()
      img.src = e.target.result
      img.onload = () => {
        changeBase({
          type: 'custom',
          url: e.target.result,
          file: file,
        })
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <button type="button" onClick={() => changeBase({ type: 'ear' })}>
        Ear
      </button>
      <button type="button" onClick={() => changeBase({ type: 'lips' })}>
        Lips
      </button>
      <button type="button" onClick={() => changeBase({ type: 'nose' })}>
        Nose
      </button>
      <input type="file" onChange={handleFileUpload} />
    </div>
  )
}

export { BaseSelector }