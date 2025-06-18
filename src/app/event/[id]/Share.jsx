"use client"
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton, TwitterIcon, TwitterShareButton, ViberIcon, ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "next-share";

const Share = ({id, title}) =>  {
  const url = "https://teatro.ge/event/" + id + ""
  return (
    <div style={{display: 'flex', gap: 12}}>
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={'#teatro'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={url}
        title={title}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <ViberShareButton
        url={url}
        title={title}
      >
        <ViberIcon size={32} round />
      </ViberShareButton>
    </div>
  )
}

export default Share;