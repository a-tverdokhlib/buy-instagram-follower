type Props = {}

export const Footer: React.VFC<Props> = () => (
  <footer style={{ marginTop: 'auto' }}>
    <div style={{ background: '#00676E', height: '15em' }}></div>
    <div style={{ background: '#005B61', height: '10em' }}></div>
    <div style={{ background: '#00484D', height: '5em' }}></div>
  </footer>
)

export default {
  args: {},

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/txwEsGpKjKC8ZESUs0mX6V/Layouts-ASK-Platform?node-id=5087%3A95289',
    },
  },
}
