import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { StyledPaginationButtons } from "./styled";
import { iPaginationCars } from "../../contexts/CarContext/props";

interface PaginationButtonsProps {
  handlePagination: (page: string) => Promise<void>;
  cars: iPaginationCars;
}

export const PaginationButtons = ({
  handlePagination,
  cars,
}: PaginationButtonsProps) => {
  return (
    <StyledPaginationButtons>
      <button
        onClick={() => handlePagination("previous")}
        style={{ visibility: cars?.previous ? "visible" : "hidden" }}
      >
        <FaAngleLeft /> Anterior
      </button>
      <div
        style={{
          visibility: cars?.previous || cars?.next ? "visible" : "hidden",
        }}
      >
        {cars?.currentPage} de {cars?.totalPages}
      </div>
      <button
        onClick={() => handlePagination("next")}
        style={{ visibility: cars?.next ? "visible" : "hidden" }}
      >
        Seguinte <FaAngleRight />
      </button>
    </StyledPaginationButtons>
  );
};
