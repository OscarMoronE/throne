import React, { useEffect, useState } from 'react';
import './fireEffect.css';

const FireEffect = ({ duration = 8000 }) => {
    const [particles, setParticles] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const createParticle = () => ({
            id: Math.random(),
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            size: `${Math.random() * 8 + 4}px`,
            color: `hsl(${Math.random() * 30 + 10}, 100%, ${Math.random() * 30 + 50}%)`,
        });

        const generateParticles = () => {
            const newParticles = Array.from({ length: 200 }, createParticle);
            setParticles(newParticles);
        };

        generateParticles();

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    return (
        <div className="fire-container">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="fire-particle"
                    style={{
                        left: particle.left,
                        animationDuration: particle.animationDuration,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                    }}
                />
            ))}
        </div>
    );
};

export default FireEffect;