import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import './DancingCat.css'

function DancingCat() {
  const {
    isAnimating,
    animationSpeed,
    animationType,
    toggleAnimation,
    changeAnimationSpeed,
    changeAnimationType
  } = useAnimation(true)

  return (
    <div className="dancing-cat-container">
      <div
        className={`dancing-cat ${isAnimating ? 'dancing' : ''} ${animationType}`}
        style={{
          '--animation-speed': `${2 / animationSpeed}s`
        }}
      >
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>

      <div className="controls">
        <div className="control-group">
          <button className="dance-button primary" onClick={toggleAnimation}>
            {isAnimating ? '🛑 멈춰!' : '💃 춤춰!'}
          </button>
        </div>

        <div className="control-group">
          <label className="control-label">댄스 스타일</label>
          <div className="button-group">
            <button
              className={`style-button ${animationType === 'dance' ? 'active' : ''}`}
              onClick={() => changeAnimationType('dance')}
            >
              🕺 일반
            </button>
            <button
              className={`style-button ${animationType === 'bounce' ? 'active' : ''}`}
              onClick={() => changeAnimationType('bounce')}
            >
              🦘 바운스
            </button>
            <button
              className={`style-button ${animationType === 'wiggle' ? 'active' : ''}`}
              onClick={() => changeAnimationType('wiggle')}
            >
              🐍 흔들기
            </button>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">속도 조절</label>
          <div className="speed-controls">
            <button
              className={`speed-button ${animationSpeed === 0.5 ? 'active' : ''}`}
              onClick={() => changeAnimationSpeed(0.5)}
            >
              🐌 느림
            </button>
            <button
              className={`speed-button ${animationSpeed === 1 ? 'active' : ''}`}
              onClick={() => changeAnimationSpeed(1)}
            >
              🚶 보통
            </button>
            <button
              className={`speed-button ${animationSpeed === 2 ? 'active' : ''}`}
              onClick={() => changeAnimationSpeed(2)}
            >
              🏃 빠름
            </button>
          </div>
        </div>

        <div className="keyboard-hint">
          <p>💡 <strong>스페이스바</strong>를 누르면 애니메이션을 시작/정지할 수 있어요!</p>
        </div>
      </div>
    </div>
  )
}

export default DancingCat