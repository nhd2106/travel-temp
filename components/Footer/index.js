import Link from "next/link";
import { Container } from "@material-ui/core";

import { FooterStyles } from "../styles";

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="footer">
          <div className="left">
            <div>
              <h1>Lux Journey</h1>
              <span>
                Đồng hành cùng kỳ nghỉ của bạn, <br></br> bọn mình luôn luôn có
                giá ưu đãi nhất.
              </span>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/cocotravelvn/" title="facebook-social-media">
                    <img src="/facebook.svg" alt="facebook-social-media" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" title="instagram-social-media">
                    <img src="/instagram.svg" alt="instagram-social-media" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" title="youtube-social-media">
                    <img src="/youtube.svg" alt="youtube-social-media" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div>
              <h2>Cần trợ giúp?</h2>
              <div className="helps">
                <Link href="/tro-giup">
                  <a>. Đặt chỗ thế nào</a>
                </Link>
                <Link href="/lien-he">
                  <a>. Liên hệ</a>
                </Link>
                <Link href="/tro-giup">
                  <a>. Hỏi đáp</a>
                </Link>
                <Link href="/tro-giup">
                  <a>. Tuyển dụng</a>
                </Link>
              </div>
            </div>
            <div>
              <h2>Cần trợ giúp?</h2>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h1>Lux Journey</h1>
          <span>Copyright © 2021 Lux Journey.</span>
        </div>
      </FooterStyles>
    </>
  );
}
