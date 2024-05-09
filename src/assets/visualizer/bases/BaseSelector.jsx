const BaseSelector = ({ changeBase }) => {
  return (
    <div>
      <button type="button" onClick={() => changeBase('ear')}>
        Ear
      </button>
      <button type="button" onClick={() => changeBase('lips')}>
        Lips
      </button>
      <button type="button" onClick={() => changeBase('nose')}>
        Nose
      </button>
    </div>
  )
}

export { BaseSelector }