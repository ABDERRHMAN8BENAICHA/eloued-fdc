// "use client";
// import { Text } from '@visx/text';
// import { scaleLog } from '@visx/scale';
// import Wordcloud from '@visx/wordcloud/lib/Wordcloud';

// export interface WordData {
//     text: string;
//     value: number;
// }


// const words: WordData[] = [
//     { text: 'إبداع مستمر', value: Math.random() * 100 }, // Continuous creativity
//     { text: 'التعاون المثمر', value: Math.random() * 100 }, // Fruitful collaboration
//     { text: 'رؤية مستقبلية واضحة', value: Math.random() * 100 }, // Clear vision for the future
//     { text: 'فريق العمل المتحد', value: Math.random() * 100 }, // United team
//     { text: 'الابتكار هو المفتاح', value: Math.random() * 100 }, // Innovation is the key
//     { text: 'أفكار جديدة تحتاج إلى تطوير', value: Math.random() * 100 }, // New ideas need development
//     { text: 'العمل الجماعي أساس النجاح', value: Math.random() * 100 }, // Teamwork is the foundation of success
//     { text: 'تحسين التواصل بين الأعضاء', value: Math.random() * 100 }, // Improve communication between members
//     { text: 'التحفيز هو ما يفرق', value: Math.random() * 100 }, // Motivation is what makes the difference
//     { text: 'نحتاج إلى المزيد من التخطيط', value: Math.random() * 100 }, // We need more planning
//     { text: 'المسؤولية من أهم القيم', value: Math.random() * 100 }, // Responsibility is one of the most important values
//     { text: 'تبادل الأفكار يساعد على النمو', value: Math.random() * 100 }, // Sharing ideas helps growth
//     { text: 'الوقت هو أغلى ما نملك', value: Math.random() * 100 }, // Time is our most valuable asset
//     { text: 'المشاكل فرص للتعلم', value: Math.random() * 100 }, // Problems are opportunities to learn
//     { text: 'الأهداف واضحة ولكن التحديات كبيرة', value: Math.random() * 100 }, // The goals are clear, but the challenges are big
//     { text: 'التطور يحتاج إلى وقت', value: Math.random() * 100 }, // Development takes time
// ];

// const colors = ['#143059', '#2F6B9A', '#82a6c2'];
// const fontScale = scaleLog({
//     domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
//     range: [10, 100],
// });

// const fontSizeSetter = (datum: WordData) => fontScale(datum.value);
// const fixedValueGenerator = () => 0.5;

// export default function Page() {
//     return (
//         <div className="flex items-center justify-center h-screen">
//             <Wordcloud
//                 words={words}
//                 height={300}
//                 width={600}
//                 font={"Cairo"}
//                 fontSize={fontSizeSetter}
//                 padding={10}
//                 spiral={"rectangular"}
//                 random={fixedValueGenerator}
//                 rotate={0}
//             >
//                 {(cloudWords) =>
//                     cloudWords.map((w, i) => (
//                         <Text
//                             fill={colors[i % colors.length]}
//                             key={i}
//                             textAnchor={'middle'}
//                             transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
//                             fontSize={w.size}
//                             fontFamily={'Cairo'}
//                             fontWeight={'bold'}
//                         >
//                             {w.text}
//                         </Text>
//                     ))
//                 }
//             </Wordcloud>
//         </div>
//     );
// }


"use client";
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import { useEffect, useState } from 'react';

export interface WordData {
    text: string;
    value: number;
}

const words: WordData[] = [
    { text: 'إبداع مستمر', value: Math.random() * 100 },
    { text: 'التعاون المثمر', value: Math.random() * 100 },
    { text: 'رؤية مستقبلية واضحة', value: Math.random() * 100 },
    { text: 'فريق العمل المتحد', value: Math.random() * 100 },
    { text: 'الابتكار هو المفتاح', value: Math.random() * 100 },
    { text: 'أفكار جديدة تحتاج إلى تطوير', value: Math.random() * 100 },
    { text: 'العمل الجماعي أساس النجاح', value: Math.random() * 100 },
    { text: 'تحسين التواصل بين الأعضاء', value: Math.random() * 100 },
    { text: 'التحفيز هو ما يفرق', value: Math.random() * 100 },
    { text: 'نحتاج إلى المزيد من التخطيط', value: Math.random() * 100 },
    { text: 'المسؤولية من أهم القيم', value: Math.random() * 100 },
    { text: 'تبادل الأفكار يساعد على النمو', value: Math.random() * 100 },
    { text: 'الوقت هو أغلى ما نملك', value: Math.random() * 100 },
    { text: 'المشاكل فرص للتعلم', value: Math.random() * 100 },
    { text: 'الأهداف واضحة ولكن التحديات كبيرة', value: Math.random() * 100 },
    { text: 'التطور يحتاج إلى وقت', value: Math.random() * 100 },
];

// const colors = ['#143059', '#2F6B9A', '#82a6c2'];
const colors = ['#f68b3c', '#6b8fa6', '#e56a4c']; 
const fontScale = scaleLog({
    domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
    range: [10, 100],
});

const fontSizeSetter = (datum: WordData) => fontScale(datum.value);
const fixedValueGenerator = () => 2;

export default function Page() {
    const [windowSize, setWindowSize] = useState({ width: 600, height: 600 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen px-4 md:px-8">
            <div className="w-full max-w-4xl">
                <Wordcloud
                    words={words}
                    height={windowSize.height * 0.4}
                    width={windowSize.width * 0.8}    
                    font={"Cairo"}
                    fontSize={fontSizeSetter}
                    spiral={"rectangular"}
                    random={fixedValueGenerator}
                    rotate={0}
                >
                    {(cloudWords) =>
                        cloudWords.map((w, i) => (
                            <Text
                                fill={colors[i % colors.length]}
                                key={i}
                                textAnchor={'middle'}
                                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                                fontSize={w.size}
                                fontFamily={'Cairo'}
                                fontWeight={'bold'}
                            >
                                {w.text}
                            </Text>
                        ))
                    }
                </Wordcloud>
            </div>
        </div>
    );
}
