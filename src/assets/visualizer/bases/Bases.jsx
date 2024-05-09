const Bases = ({selectedBase}) => {
  const base = `src/assets/visualizer/bases/${selectedBase}.png`

  return <img src={base} alt="base for piercings" />
}

export { Bases }