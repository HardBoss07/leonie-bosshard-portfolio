import IndependentPhotography from "@/components/projects/different-projects/IndependentPhotography";
import ProductPhotography from "@/components/projects/different-projects/ProductPhotography";
import PortraitPhotography from "@/components/projects/different-projects/PortraitPhotography";

const Photography = () => {
    return (
        <div>
            <ProductPhotography />
            <PortraitPhotography />
            <IndependentPhotography />
        </div>
    )
}

export default Photography;