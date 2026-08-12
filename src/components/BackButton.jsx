import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackButton({ label = "Back" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="back-button"
    >
      <ArrowLeft size={17} />
      {label}
    </button>
  );
}

export default BackButton;

