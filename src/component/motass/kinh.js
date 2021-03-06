import React, { useEffect, useRef } from "react";
import axios from "axios";

import { FaStar, FaPlus } from "react-icons/fa";
import { BiCheckSquare } from "react-icons/bi";
import {
  AiOutlineDoubleRight,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUserContext } from "./../../contexts/Authcontentx";
import {
  selectedProduct,
  removeSelectedProduct,
  selectedProducts,
  selectedProductss,
  accTOCART,
} from "../../action/actionType";
import Foucus from "./../banner/foucusContent";
import { Link } from "react-router-dom";
import { Gary } from "./../kinh/data";
import { useState } from "react";
import DetaKinh from "./DeKinh";

import TabMota from "./formKinh/tabMota";
import SiceXet from "./formKinh/siceXet";
const ProductDetails = (props) => {
  const [product, setproduct] = useState(Gary);
  const [Indexs, setIndexs] = useState(0);
  const [total, setTotal] = useState(0);
  const [hide, sethide] = useState(false);
  const [tab, settab] = useState(false);
  const { user } = useUserContext();
  const imgDiv = useRef();
  const { garyId } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  let detas = product.filter((item, index) => {
    return item.id === garyId;
  });
  const productssss = (productsss) => {
    if (user === null) {
      alert("vuni long dang");
      return;
    }

    const action = accTOCART(productsss, 1);
    dispatch(action);
  };
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div>
      {detas.map((product) => (
        <div>
          {product.length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div>
              <div className="title-Mota">
                <span>Trang ch??? / {product.name}</span>
              </div>
              <div className="container__Mota">
                <div className="containet_fulter">
                  <div className="container_fulter1">
                    <img
                      className="image-Mota"
                      onMouseMove={handleMouseMove}
                      src={`${product.image[Indexs]}`}
                      ref={imgDiv}
                      onMouseLeave={() =>
                        (imgDiv.current.style.backgroundPosition = `center`)
                      }
                    />
                  </div>
                  <div className="container_fulter2">
                    <div>
                      <span>{product.trademark}</span>
                      <h3 style={{ fontWeight: "700" }}>{product.name}</h3>
                    </div>

                    <div className="fulter3">
                      <span>
                        <span className="informas">Xu???t x??? :</span>
                        {product.machie}
                      </span>
                      <span className="tranfor">
                        <span className="informas">Danh m???c : </span>Son m??i
                      </span>

                      <div>
                        <span>
                          <span className="informas">????nh gi?? :</span>
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" /> (5){" "}
                          <span>Vi???t ????nh gi??</span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="descriptions">
                      <div className="description1">
                        <div>
                          <h3 className="price-des">
                            <strong className="price-des">
                              {product.price}
                            </strong>
                          </h3>
                          <h5 className="price-dess">
                            <strong className="price-dess">
                              {product.price1}
                            </strong>
                          </h5>
                        </div>
                        <div className="information-des">
                          <div>
                            <span>
                              <span className="informas">Th????ng hi???u :</span>
                              {product.trademark}
                            </span>
                          </div>
                          <br></br>
                          <div className="informa">
                            <span>
                              <span className="informas">M??u s???c :</span>
                              {product.Facecolor}
                            </span>
                          </div>
                          <br />
                          <div className="informa">
                            <span>
                              <span className="informas">Xu???t x??? :</span>{" "}
                              {product.machie}
                            </span>
                          </div>
                          <br />
                          <div className="informa">
                            <span>
                              <span className="informas">G???i ?????t mua :</span>{" "}
                              <strong style={{ color: "crimson" }}>
                                093.934.8888
                              </strong>{" "}
                              (7:30 - 22:00)
                            </span>
                          </div>
                        </div>
                        <div className="see-information">
                          <h6>
                            <strong>Xem th??ng tin chi ti???t</strong>{" "}
                            <AiOutlineDoubleRight />{" "}
                          </h6>
                        </div>
                        <div className="add">
                          <button
                            className="edit"
                            onClick={productssss(product)}
                          >
                            TH??M V??O GI??? H??NG
                          </button>
                          <button className="cartss">MUA NG??Y</button>
                        </div>
                        <div className="share">
                          <span>
                            CHIA S??? QUA{" "}
                            <AiFillFacebook className="share-icon" />{" "}
                            <AiOutlineTwitter className="share-icon" />{" "}
                            <AiFillInstagram className="share-icon" />{" "}
                          </span>
                        </div>
                      </div>
                      <div className="description2">
                        <div className="dnescriptio2-2">
                          <div className="description2-2_2">
                            <img src="https://vuahanghieu.com/assets/images/shop.svg" />{" "}
                            <span>M??? Ph???m Sino</span>
                            <br />
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" /> <br />
                            <img src="https://vuahanghieu.com/assets/images/verify.svg" />
                            <span>Gian h??ng ?????m b???o</span>
                            <br />
                            <img src="https://vuahanghieu.com/assets/images/phone-call.svg" />
                            <span>093.934.8888</span>
                          </div>
                          <div className="description2-2_3">
                            <img
                              src="https://vuahanghieu.com/assets/images/checkbox.svg"
                              className="icon_des"
                            />
                            <span>
                              mi???n ph?? tr??? ?????i trong 7 ng??y{" "}
                              <Link>chi ti???t</Link>{" "}
                            </span>
                            <br />
                            <img
                              src="https://vuahanghieu.com/assets/images/checkbox.svg"
                              className="icon_des"
                            />
                            <span>Ki???m tra h??ng tr?????c khi nh???n </span>
                            <br />
                            <img
                              src="https://vuahanghieu.com/assets/images/checkbox.svg"
                              className="icon_des"
                            />
                            <span>Ho??n ti???n n???u ph??t hi??n h??ng gi??? </span>
                            <br />
                            <button className="btn-see">XEM SHOP</button>
                            <br />
                            <p className="contrac">
                              b???n mu???n b??n h??ng c??ng vua h??y ?{" "}
                              <Link>????ng k??</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="foucus_des">
                  <span>
                    <strong>S???n ph???m th?????ng mua c??ng</strong>
                    <span className="foucus-fulter">
                      (Gi???m 20.000 ??? v???i m???i s???n ph???m mua k??m)
                    </span>
                  </span>
                  <span>
                    <strong>
                      <i>L???a chon kh??c</i>
                    </strong>
                  </span>
                </div>
                <div className="foucus-content">
                  <div className="foucus-content1">
                    <img src={`${product.image[0]}`} />{" "}
                    <FaPlus className="icon1" />{" "}
                    <img src={`${product.image[1]}`} />{" "}
                    <FaPlus className="icon1" />{" "}
                    <img src={`${product.image[2]}`} />
                  </div>
                  <div className="foucus-content2">
                    <span>
                      {" "}
                      <BiCheckSquare /> {product.name}{" "}
                      <strong className="price-foucus">{product.price}</strong>
                    </span>
                    <br />
                    <span>
                      {" "}
                      <BiCheckSquare /> <Link>{product.name}</Link>{" "}
                      <strong className="price-foucus">{product.price}</strong>
                    </span>
                    <br />
                    <span>
                      {" "}
                      <BiCheckSquare />
                      <Link> {product.name} </Link>
                      <strong className="price-foucus">{product.price}</strong>
                    </span>
                    <div className="foucus-content2-2">
                      <span>
                        T???ng ti???n{" "}
                        <span className="price-foucuss">{product.price}</span>
                      </span>
                      <button className="edits"> + TH??M V??O GI??? H??NG</button>
                    </div>
                  </div>

                  <div className="foucus-content3">
                    <DetaKinh image={product.image} setindexs={setIndexs} />
                  </div>
                </div>
                <div className="foucus_end">
                  <div className="foucus_end1">
                    <TabMota
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      trade={product.trademark}
                      cord={product.cord}
                      machie={product.machie}
                      Facecolo={product.Facecolor}
                      price1={product.price1}
                      settab={settab}
                      tab={tab}
                      images={product.images}
                    />
                  </div>

                  <div className="foucus_end2-kinh">
                    <h4 className="title_foucus_end2">C?? th??? b???n quan t??m</h4>
                    <div className="foucus_end2-2">
                      <span>
                        <Link>?????ng h???</Link>
                      </span>
                      <span>
                        <Link>M?? Lacoste</Link>
                      </span>
                      <span>
                        <Link>T??i s??ch hi???u</Link>
                      </span>
                      <span>
                        <Link>M?? Gucci</Link>
                      </span>
                      <span>
                        <Link>Son Mac</Link>
                      </span>
                      <span>
                        <Link>N?????c hoa</Link>
                      </span>
                      <span>
                        <Link>M??y r???a m???t </Link>
                      </span>
                      <span>
                        <Link>L??n Kh??? m??i</Link>
                      </span>
                      <span>
                        <Link>Gi??y</Link>
                      </span>
                      <span>
                        <Link>Kem </Link>
                      </span>
                      <span>
                        <Link>Son m??i</Link>
                      </span>
                      <span>
                        <Link>??o ph??ng</Link>
                      </span>
                      <span>
                        <Link>MLB</Link>
                      </span>
                    </div>
                    <div className="foucus_end2-3">
                      <h4 className="title_foucus_end2-3">S???n ph???m t????ng t???</h4>
                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[0]}
                          />
                        </div>
                        <div>
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[1]}
                          />
                        </div>
                        <div>
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[2]}
                          />
                        </div>
                        <div className="informatin-foucus2">
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[3]}
                          />
                        </div>
                        <div>
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sice-foucu">
                  <h4 className="title-Motas">
                    S???n ph???m kh??c c???a gian h??ng M??? ph???m Sino
                  </h4>
                </div>
                <SiceXet />
                <Foucus />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
