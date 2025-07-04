import Container from "../global/container";

const Companies = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        The Rising Cost of <span className="font-subheading italic">Environmental</span> Uncertainty
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 text-center">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">$2T</div>
                        <p className="text-muted-foreground">in annual productivity losses from climate extremes</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">83%</div>
                        <p className="text-muted-foreground">increase in climate-related disaster events</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">$25T</div>
                        <p className="text-muted-foreground">in supply chain losses from climate disruptions</p>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Companies