import { GalleryGrid, PageContainer, ProductPageStyled, SectionsContainer } from "./style"
import Car from "../../../public/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"

const Products = () => {
  return (
    <ProductPageStyled>
      <PageContainer>
        <div>
          <SectionsContainer>
            <img src={Car} />
          </SectionsContainer>
          <SectionsContainer>
            Info do carro
          </SectionsContainer>
          <SectionsContainer>
            Descrição
          </SectionsContainer>
        </div>
        <div>
          <SectionsContainer>
            <div>
              <h6>Fotos</h6>
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
              Info do usuário
          </SectionsContainer>
        </div>
      </PageContainer>
    </ProductPageStyled>
  )
}

export default Products