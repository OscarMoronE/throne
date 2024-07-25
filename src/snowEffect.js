import React, { useEffect, useState } from 'react';
import './snowEffect.css';

const SnowEffect = ({ duration = 8000 }) => {
    const [snowflakes, setSnowflakes] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const createSnowflake = () => ({
            id: Math.random(),
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random(),
            size: `${Math.random() * 5 + 5}px`,
        });

        const generateSnowflakes = () => {
            const newSnowflakes = Array.from({ length: 50 }, createSnowflake);
            setSnowflakes(newSnowflakes);
        };

        generateSnowflakes();

        // Configurar un temporizador para ocultar el efecto después de la duración especificada
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    return (
        <div className="snow-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        animationDuration: flake.animationDuration,
                        opacity: flake.opacity,
                        width: flake.size,
                        height: flake.size,
                    }}
                />
            ))}
        </div>
    );
};

export default SnowEffect;