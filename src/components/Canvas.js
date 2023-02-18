import React from 'react';

import './Canvas.css'

class Canvas extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { dots: [] };
    }

    render()
    {
        return (
            <canvas id="bg_canvas" width={window.innerWidth + "px"} height={window.innerHeight + "px"}/>
        );
    }

    initCanvas()
    {
        const canvas = document.getElementById("bg_canvas");
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const dot_count = 125;

        for (let i = 0; i < dot_count; i++)
        {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            const radius = (Math.random() * 1.5) + 1;

            const velocityX = (Math.random() * 0.75) - 0.5;
            const velocityY = (Math.random() * 0.75) - 0.5;

            const fill_num = Math.random();

            let fill = "";

            if (fill_num <= 0.125)
            {
                fill = "#be97ff";
            }
            else if (fill_num <= 0.25)
            {
                fill = "#ff8dae";
            }
            else if (fill_num <= 0.375)
            {
                fill = "#fac898";
            }
            else
            {
                fill = "#d0d0d0";
            }

            this.state.dots.push({x, y, radius, velocityX, velocityY, fill});
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        
    }

    componentDidMount()
    {
        window.addEventListener("resize", () =>
        {
            this.setState({ dots: [] });
        });
        
        // enable link smooth scrolling

        const links = document.querySelectorAll('a[href*="#"]');
        
        links.forEach(link =>
        {
            if (link.hash !== '' && link.hash !== '#')
            {
                link.addEventListener('click', function(event)
                {
                    event.preventDefault();
                    
                    document.querySelector(link.hash).scrollIntoView(
                    {
                        behavior: 'smooth'
                    });
                });
            }
        });

        const canvas = document.getElementById("bg_canvas");
        const ctx = canvas.getContext('2d');

        const dot_count = 125;

        // set all initial dots on the canvas
        for (let i = 0; i < dot_count; i++)
        {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            const radius = (Math.random() * 1.5) + 1;

            const velocityX = (Math.random() * 0.75) - 0.5;
            const velocityY = (Math.random() * 0.75) - 0.5;

            const fill_num = Math.random();

            let fill = "";

            if (fill_num <= 0.1)
            {
                fill = "#be97ff";
            }
            else if (fill_num <= 0.2)
            {
                fill = "#ff8dae";
            }
            else if (fill_num <= 0.3)
            {
                fill = "#fac898";
            }
            else
            {
                fill = "#d0d0d0";
            }

            this.state.dots.push({x, y, radius, velocityX, velocityY, fill});
        }

        setInterval(() =>
        {
            // clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // update dots' positions
            for (let i = 0; i < dot_count; i++)
            {
                // collision detection
                if (this.state.dots[i].x >= canvas.width || this.state.dots[i].x <= 0)
                {
                    this.state.dots[i].velocityX = -this.state.dots[i].velocityX;
                }

                if (this.state.dots[i].y >= canvas.height || this.state.dots[i].y <= 0)
                {
                    this.state.dots[i].velocityY = -this.state.dots[i].velocityY;
                }

                // move dots
                this.state.dots[i].x += this.state.dots[i].velocityX;
                this.state.dots[i].y += this.state.dots[i].velocityY;
            }
            
            for (let i = 0; i < dot_count; i++)
            {
                ctx.beginPath();

                ctx.fillStyle = this.state.dots[i].fill;

                ctx.arc(this.state.dots[i].x, this.state.dots[i].y, this.state.dots[i].radius, 0, 2 * Math.PI);

                ctx.fill();
            }
        }, 45);

        console.log("initiated canvas");
    }
}

export default Canvas