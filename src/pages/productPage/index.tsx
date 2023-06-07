import { CarInfoContainer, CommentTextarea, CommentsList, GalleryGrid, PageContainer, ProductPageStyled, SectionsContainer, Tag } from "./style"
import Car from "../../../public/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
import { Avatar } from "../../styles/global"
import { theme } from "../../styles/theme"
import { StyledButton } from "../../styles/button"

const Products = () => {
  return (
    <ProductPageStyled>
      <PageContainer>
        <div>
          <SectionsContainer>
            <img src={Car} />
          </SectionsContainer>
          <SectionsContainer>
            <CarInfoContainer>
              <h6 className="heading6">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h6>
              <div className="carInfos">
                <div>
                  <Tag>2013</Tag>
                  <Tag>0km</Tag>
                </div>
                <h6 className="heading7">
                  R$ 00.000,00
                </h6>
              </div>
              <StyledButton buttonstyle="brand1" buttonsize="fit">Comprar</StyledButton>
            </CarInfoContainer>
          </SectionsContainer>
          <SectionsContainer>
              <h6 className="heading6">Descrição</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>           
          </SectionsContainer>
        </div>
        <div>
          <SectionsContainer>
            <div>
              <h6 className="heading6">Fotos</h6>
              <GalleryGrid>
                <div className="imgContainer"><img src={Car} /></div>
                <div className="imgContainer"><img src={Car} /></div>
                <div className="imgContainer"><img src={Car} /></div>
                <div className="imgContainer"><img src={Car} /></div>
                <div className="imgContainer"><img src={Car} /></div>
                <div className="imgContainer"><img src={Car} /></div>
              </GalleryGrid>
            </div>           
          </SectionsContainer>
          <SectionsContainer>
            <Avatar className="avatarProfileBig" $bg={theme.colors.random1}>GL</Avatar>
            <div className="sellerInfos">
              <h6 className="heading6">Gustavo Lima</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
              <StyledButton buttonstyle="grey" buttonsize="fit">Ver todos anúncios</StyledButton>
            </div>           
          </SectionsContainer>
        </div>
        <div>
          <SectionsContainer>
            <h6 className="heading6">Comentários</h6>
            <ul>
              <CommentsList>
                <div>
                  <Avatar className="avatar" $bg={theme.colors.random1}>GL</Avatar>
                  <p className="commentUsername">Gustavo Lima</p>
                  <span className="commentTime">•</span>
                  <p className="commentTime">há 3 dias</p>
                </div>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </CommentsList>
            </ul>
            <CommentTextarea>
              <div>
                <Avatar className="avatar" $bg={theme.colors.random1}>GL</Avatar>
                <p className="commentUsername">Gustavo Lima</p>
              </div>
              <textarea name="" id="" cols={30} rows={10}></textarea>
            </CommentTextarea>   
          </SectionsContainer>
        </div>
      </PageContainer>
    </ProductPageStyled>
  )
}

export default Products