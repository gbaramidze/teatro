import React from 'react'
import Image from 'next/image'
import BlogTitle from '@/components/common/BlogTitle'
import ShareIcons from '@/components/common/ShareIcons'

import blog_content_img from "@/assets/images/blog-content-image.jpg"
import blog_content_img_2 from "@/assets/images/blog-content-image-2.png"
import QuoteIcon from '@/components/common/icons/QuoteIcon'
import SingleBlogSwiper from '@/components/blogs/singleBlog/SingleBlogSwiper'
import PostNavigation from '@/components/common/PostNavigation'
import ButtonOutline from '@/components/common/buttons/ButtonOutline'
import RelatedBlog from '@/components/blogs/singleBlog/RelatedBlog'
import Comments from '@/components/common/Comments'
import LiveReply from '@/components/blogs/singleBlog/LiveReply'

const SingleBlog = ({ imgTop }) => {
  return (
    <section className="blog-content-section py-50 py-lg-80 py-xxl-100">
      <div className="container">
        <div className="row align-items-start position-relative">
          {
            imgTop &&
            <div className="col-12 pb-4 pb-lg-40">
              <div className="blog-content-image my-40 my-lg-50 position-relative overflow-hidden">
                <picture>
                  <source media="(max-width:575px)" srcSet={blog_content_img_2} />
                  <Image src={blog_content_img} className="img-fluid" alt="img" />
                </picture>
              </div>
              { /* -- blog-content-image -- */}
            </div>
          }

          <ShareIcons />
          <div className="col-lg-9">
            <BlogTitle />
            {
              imgTop ||
              <div className="blog-content-image mt-50 mb-40 mt-lg-100 mb-lg-60 mx-lg-n100 position-relative overflow-hidden">
                <picture>
                  <source media="(max-width:575px)" srcSet={blog_content_img_2} />
                  <Image src={blog_content_img} className="img-fluid" alt="img" />
                </picture>
              </div> /* -- blog-content-image -- */
            }

            <div className="blog-inner-content pt-4 pt-lg-40">
              <p className="blog-inner-text mb-30 mb-lg-50">The world of live events is buzzing with excitement as we prepare to unveil the lineup for our highly anticipated comeback event. After a prolonged hiatus, we're back with a bang, and we're bringing some of the biggest names in the industry to the stage. In this blog post, we'll take you on a journey behind the scenes as we reveal the incredible lineup that's set to make our event one for the ages.</p>

              <h5 className="blog-inner-heading fw-semibold mb-3 mb-lg-40">
                The Art of the Comeback
              </h5>

              <p className="blog-inner-text mb-30 mb-lg-50">It's no secret that the past couple of years have been challenging for the live event industry. The pandemic forced us to hit pause on our shows, leaving fans and artists alike longing for the electric atmosphere of live performances. But as they say, "The show must go on," and that's exactly what we're doing.</p>

              <p className="blog-inner-text mb-0">Our team has been hard at work, meticulously planning every detail of this epic comeback event. We knew that after such a long hiatus, we had to come back stronger and more unforgettable than ever before. And that starts with the lineup.</p>

              <blockquote className="wp-block-quote my-30 my-lg-50">
                <div className="d-flex gap-10">
                  <span className="block-quote-icon"> <QuoteIcon /> </span>
                  <div>
                    <h5 className="blog-inner-text custom-jakarta fw-bold mb-20">In the meantime, share this post with your fellow music lovers and let the world know that we're back and ready to rock!</h5>
                    <h5 className="blog-inner-text custom-jakarta text-primary fw-extra-bold">-  Orion Ryder</h5>
                  </div>
                </div>
              </blockquote>

              <h5 className="blog-inner-heading fw-semibold mb-3 mb-lg-40">
                A Star-Studded Affair
              </h5>

              <p className="blog-inner-text mb-30 mb-lg-50">When it comes to a comeback, it's all about making a statement. And what better way to do that than by assembling a lineup of some of the most iconic and influential artists of our time?</p>

              <ol className="blog-order-list mb-0 d-flex flex-column gap-40">
                <li className="fs-4">
                  <span>The Headliner:</span> We knew we needed someone who could set the stage on fire, and we found just the artist for the job. The headliner for our comeback event is none other than the legendary [Artist Name].
                </li>
                <li className="fs-4">
                  <span>Chart-Toppers:</span> But that's just the beginning. Our lineup is packed with chart-topping artists from various genres.
                </li>
                <li className="fs-4">
                  <span>Emerging Stars:</span> We're also shining a spotlight on the next generation of music superstars.
                </li>
              </ol>
            </div>
            {/* -- blog-inner-content --	 */}
            <div className="py-40 py-lg-60">
              <SingleBlogSwiper />
            </div>

            <div className="blog-inner-content">

              <h5 className="blog-inner-heading fw-semibold mb-3 mb-lg-40">
                Your Ticket to an Unforgettable Experience
              </h5>

              <p className="blog-inner-text mb-30 mb-lg-50">Our comeback event is not just a concert; it's an experience. It's a celebration of music, art, and the unbreakable bond that connects us all. It's a reminder that even in the face of adversity, music has the power to heal, inspire, and bring us together.</p>

              <p className="blog-inner-text mb-30 mb-lg-50">So, mark your calendars, set your reminders, and get ready for a comeback event like no other. This is your chance to be part of history, to witness the magic of live music, and to create memories that will last a lifetime.
                Stay tuned for ticket information, behind-the-scenes exclusives, and more as we count down the days to our epic comeback event. We can't wait to see you there!
              </p>
              <p className="blog-inner-text mb-30 mb-lg-50">In the meantime, share this post with your fellow music lovers and let the world know that we're back and ready to rock!</p>

              <div className="blog-buttons d-flex flex-wrap gap-10">
                <ButtonOutline className={"btn-sm btn-outline-primary"} link={"#"}> musicfest </ButtonOutline>
                <ButtonOutline className={"btn-sm btn-outline-primary"} link={"#"}> concert </ButtonOutline>
                <ButtonOutline className={"btn-sm btn-outline-primary"} link={"#"}> workshop </ButtonOutline>
              </div>
              {/* -- blog-buttons -- */}

              <PostNavigation /> {/* -- Next and previous post link --*/}
            </div>
            <RelatedBlog />

            <div className="blog-inner-content mt-30 mt-lg-70 mt-xxl-100">
              <Comments />
              <LiveReply />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleBlog