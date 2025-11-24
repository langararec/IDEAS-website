
const DotGrid: React.FC<{ count: number; isResident: boolean, selectedCity: 'burnaby' | 'courtenay' }> = ({ count, isResident, selectedCity }) => {

    let dotColor = '#ffffff';

    if (selectedCity === 'burnaby') {
        dotColor = isResident ? '#317039' : '#75A37B';
    } else {
        dotColor = isResident ? '#034F59' : '#398F9A';
    }

    return (
        <div className="flex flex-wrap gap-1 min-h-[60px]">
            <div className="hidden bg-[#317039]"></div>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-[${dotColor}]`}
                />
            ))}
        </div>
    );
};


export default DotGrid;