import ReactPlayer from 'react-player'
import Main from '../layouts/main'
import Ink from 'react-ink'
import posed from 'react-pose';
import './index.scss';

const videoWrapperStyle = { "position": "fixed", "top": "0", "right": "0", "bottom": "0", "left": "0", "overflow": "hidden", "zIndex": "-100" }
const videoStyle = { "position": "absolute", "top": "50%", "left": "50%", "width": "auto", "height": "auto", "minWidth": "100%", "minHeight": "100%", "WebkitTransform": "translate(-50%, -50%)", "MozTransform": "translate(-50%, -50%)", "MsTransform": "translate(-50%, -50%)", "transform": "translate(-50%, -50%)" }
const contentStyle = { "margin": "0 auto", "width": "100%", "height": "100%", "maxWidth": "960px", "padding": "0 15px", "display": "flex", "alignItems": "center", "justifyContent": "center" }

const Circle = posed.div({
  attention: {
    scale: 1.3,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 0,
      loop: Infinity
    }
  }
})

const Index = props => {
  const state = { isVisible: false }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render = () => {
    const { isVisible } = this.state;

    return (
      <Main>
        <ReactPlayer url='/static/intro1.mp4' loop muted width='100%' height='100%' style={videoWrapperStyle} config={{
          file: {
            attributes: {
              style: videoStyle
            }
          }
        }} />
        <div style={contentStyle}>
          {/* <Circle className='circle' pose={isVisible ? "visible" : "hidden"} /> */}
          <img src="/static/logo-white.svg" width="200" />
          {/* <Ink /> */}
        </div>
      </Main>
    )
  }
};

export default Index;