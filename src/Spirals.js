import Confetti from 'react-confetti';

export default function Spirals() {
    const colors = ['#709672', '#396557', '#204e46'];
    const tweenDuration = 2000;

    return (
        <div className="Spirals-container">
            <Confetti
                tweenDuration={tweenDuration}
                colors={colors}
                drawShape={ctx => {
                ctx.beginPath();
                for(let i = 0; i < 22; i++) {
                    const angle = 0.35 * i;
                    const x = (0.2 + (1.5 * angle)) * Math.cos(angle);
                    const y = (0.2 + (1.5 * angle)) * Math.sin(angle);
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
                ctx.closePath();
                }}
            />
        </div>
    )

}