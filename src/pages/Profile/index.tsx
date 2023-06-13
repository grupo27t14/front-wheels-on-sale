import Card from "../../components/Card";
import { Avatar, PageStyled } from "../../styles/global";
import { theme } from "../../styles/theme";
import { ProductsContainer, ProfileContainer } from "./style";


export const Profile = () => {

  return (
    <PageStyled>
      <ProfileContainer>
        <Avatar className="avatarProfileBig" $bg={theme.colors.random1}>GL</Avatar>
        <div className="profileName">
          <h6 className="heading6">Gustavo Lima</h6>
          <span className="sellerTag">Anunciante</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the 1500s
        </p>
      </ProfileContainer>
      <ProductsContainer>
        <h5 className="heading5">Anúncios</h5>
        
        <div className="productsGrid">
          <Card />
        </div>
      </ProductsContainer>
    </PageStyled>
  )
};
