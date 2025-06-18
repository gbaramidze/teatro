"use client"
import React from 'react'

const Loading = () => {
    return (
        <div className="preloader">
            <dotlottie-player
                src="https://lottie.host/ec0751d4-1eab-4823-a8e9-dca71a16497a/mUio2LngrC.lottie"
                background="#04000A"
                speed="1"
                style={{width: "100%", height: "100%"}}
                direction="1"
                mode="normal"
                loop
                autoplay>
            </dotlottie-player>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
        </div>
    )
}

export default Loading