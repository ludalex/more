import ReactPlayer from 'react-player'
import Main from '../layouts/main'
import './index.scss';

const videoWrapperStyle = { "position": "fixed", "top": "0", "right": "0", "bottom": "0", "left": "0", "overflow": "hidden", "zIndex": "-100" }
const videoStyle = { "position": "absolute", "top": "50%", "left": "50%", "width": "auto", "height": "auto", "minWidth": "100%", "minHeight": "100%", "WebkitTransform": "translate(-50%, -50%)", "MozTransform": "translate(-50%, -50%)", "MsTransform": "translate(-50%, -50%)", "transform": "translate(-50%, -50%)" }
const contentStyle = { "margin": "0 auto", "width": "100%", "height": "100%", "maxWidth": "960px", "padding": "0 15px", "display": "flex", "alignItems": "center", "justifyContent": "center" }

const Index = () => (
    <Main>
      <ReactPlayer url='/static/intro1.mp4' loop muted autplay="true" playsinline width='100%' height='100%' style={videoWrapperStyle} config={{
        file: {
          attributes: {
            style: videoStyle
          }
        }
      }} />
      <div style={contentStyle}>
        <img src="/static/logo-white.svg" width="200" />
      </div>
    </Main> 
)

export default Index;