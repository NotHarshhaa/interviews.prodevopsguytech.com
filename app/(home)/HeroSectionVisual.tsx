"use client"
import { ChartSpline, CircleUser, MessageCircleMore } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSectionVisual() {

  const title = useRef<HTMLHeadingElement>(null);
  const Application = useRef<HTMLSpanElement>(null);
  const featureTitle1 = useRef<HTMLHeadingElement>(null);
  const featureTitle2 = useRef<HTMLHeadingElement>(null);
  const featureTitle3 = useRef<HTMLHeadingElement>(null);
  const icon1 = useRef<SVGSVGElement>(null);
  const icon2 = useRef<SVGSVGElement>(null);
  const icon3 = useRef<SVGSVGElement>(null);

  const [titleStyles, setTitleStyles] = useState<React.ReactNode[]>([]);
  const [applicationStyles, setApplicationStyles] = useState<React.ReactNode[]>([]);
  const [iconStyles, setIconStyles] = useState<React.ReactNode[]>([]);
  const [featureTitleStyles, setFeatureTitleStyles] = useState<React.ReactNode[]>([]);

  const [animating, setAnimating] = useState(false);
  
  const transitions = [
    {
      name: "titleSize",
      styles: ["text-4xl", "font-black", "tracking-tight"],
      setStyles: setTitleStyles,
      refs: [title],
    },
    {
      name: "application",
      styles: ["text-fd-primary", "font-bold"],
      setStyles: setApplicationStyles,
      refs: [Application],
      delay: 400,
    },
    {
      name: "icons",
      styles: ["h-8", "w-8", "text-fd-primary", "transform", "scale-110"],
      setStyles: setIconStyles,
      refs: [icon1, icon2, icon3],
      delay: 2000,
    },
    {
      name: "featureTitles",
      styles: ["text-lg", "font-bold", "-mt-1", "text-fd-foreground"],
      setStyles: setFeatureTitleStyles,
      refs: [featureTitle1, featureTitle2, featureTitle3],
      delay: 3000,
    },
  ]

  const FEATURES = [
    {
      title: <h2 ref={featureTitle1} className="duration-500 transition-all">DevOps Interview Questions</h2>,
      description: 'Master core DevOps concepts, tools, and best practices',
      icon: <CircleUser ref={icon1} className="duration-500 transition-all" />,
    },
    {
      title: <h2 ref={featureTitle2} className="duration-500 transition-all">Cloud Platform Questions</h2>,
      description: 'Deep dive into AWS, Azure, and GCP services',
      icon:  <MessageCircleMore ref={icon2} className="duration-500 transition-all" />,
    },
    {
      title: <h2 ref={featureTitle3} className="duration-500 transition-all">Infrastructure & CI/CD</h2>,
      description: 'Learn automation, pipelines, and deployment strategies',
      icon: <ChartSpline ref={icon3} className="duration-500 transition-all" />,
    },
  ];

  useEffect(() => {
    if (animating) return;
    setAnimating(true);
    transitions.forEach((transition, index) => {
      const stylesArray = [...transition.styles.join(' ').split('')];
      stylesArray.forEach((letter, i) => {
        setTimeout(() => {
          transition.setStyles((prev) => [...prev, <span key={`${transition.name}-${index}-${i}-${letter}`} className="text-fd-primary animate-fade-to-gray">{letter}</span>]);
        },
          i * 100
          + (transitions[index - 1] ? transitions[index - 1].styles.join(' ').length * 100 : 0)
          + (transition.delay ? transition.delay : 0)
        );
      });
      transition.styles.forEach((style, i) => {
        setTimeout(() => {
          transition.refs.forEach((ref) => {
            ref.current?.classList.add(style.trim());
          })
        },
          (style.length) * 100
          + (transition.styles[i - 1] ? transition.styles[i - 1].split('').length + 5 : 0) * 100
          + (transitions[index - 1] ? transitions[index - 1].styles.join(' ').length * 100 : 0)
          + (transition.delay ? transition.delay : 0)
        );
      });
    })
    return () => {
      transitions.forEach((transition) => {
        transition.refs.forEach((ref) => {
          ref.current?.classList.remove(...transition.styles);
        })
        transition.setStyles([]);
      })
      setAnimating(false);
    }
  }, []);

  return (
    <div className="h-full w-full max-w-screen max-h-screen sm:max-h-[min(60vh,700px)] flex-1 flex justify-center border-t border-dashed">
      <div className="flex relative w-fit justify-center max-w-[calc(var(--spacing-fd-container)+2rem)]">
        <div className="absolute top-0 right-4 z-20 flex gap-2 -translate-y-1/2 max-sm:hidden">
          <div className="flex items-center gap-2 rounded-full border bg-fd-background/80 backdrop-blur px-3 py-1.5 text-xs text-fd-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Preview
          </div>
        </div>
        
        <div className="z-10 pointer-events-none absolute w-full h-full inset-0 bg-gradient-to-b from-fd-background/0 via-fd-background/50 to-fd-background from-[calc(100%-20rem)]"/>
        
        <div className="flex lg:flex-row flex-col items-center relative overflow-hidden rounded-lg bg-fd-background/20 p-2 sm:p-4 pb-0 min-w-fd-container backdrop-blur-sm border border-dashed">
          <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-cyan-500/20 via-cyan-400/10 to-transparent blur-3xl animate-pulse-slow max-md:hidden" />
          <div className="absolute top-0 right-0 -z-10 h-full w-[35rem] bg-grid-lines-lg opacity-30 dark:opacity-20 -skew-20 -translate-y-1/2 translate-x-1/2 max-md:hidden animate-float"/>
          {/* import { Icon } from '@roninoss/icons';
          import { Link } from 'expo-router';
          import { Platform, View, type ViewStyle } from 'react-native';
          import { SafeAreaView } from 'react-native-safe-area-context';
          
          import { Button } from '~/components/nativewindui/Button';
          import { Text } from '~/components/nativewindui/Text';
          import { useColorScheme } from '~/lib/useColorScheme';
          
          const ROOT_STYLE: ViewStyle = { flex: 1 }; */}
          <pre className="font-mono sm:mb-0 w-full max-w-[calc(100vw-1rem)] min-h-96 relative text-start max-h-full p-4 lg:px-11 lg:py-6 overflow-hidden text-xs bg-fd-background/40 text-fd-foreground/50 backdrop-blur-sm rounded-xl border shadow-sm [mask-image:linear-gradient(to_bottom,red_calc(100%-15rem),transparent)] sm:[mask-image:none] transition-colors hover:bg-fd-background/60">
            <div className="absolute top-2 left-3 flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
            </div>
            <div className="absolute h-full border-r border-dashed left-[3.25rem] top-0 max-lg:hidden opacity-40"/>
            {/* line numbers */}
            <div className="absolute left-6 top-11 h-full flex flex-col gap-[0.25px] text-right max-lg:hidden">
              {Array.from({ length: 40 }, (_, i) => (
                <div key={i} className={`${[7, 10, 20, 25].includes(i+1) ? 'text-fd-primary' : 'text-fd-muted-foreground/50'} text-xs pr-4 transition-colors hover:text-fd-muted-foreground/80`}>{i + 1}</div>
              ))}
            </div>

{`export default function WelcomeConsentScreen() {

  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="mx-auto max-w-sm flex-1 justify-between gap-4 px-8 py-4 ">
        <View className="ios:pt-8 pt-12">
`}
          <div className="whitespace-pre">
            {`          <Text className="`}
            {(titleStyles)}
            {`">`}
          </div>
{`              Welcome to the
          </Text>
`}
          <div className="whitespace-pre">
            {`          <Text className="`}
            {(titleStyles)}
            {(applicationStyles)}{`">`}
          </div>
          {`              DevOps Interview Hub
          </Text>
        </View>
        <View className="gap-8">
          {FEATURES.map((feature) => (
            <View key={feature.title} className="flex-row gap-4">
              <View className="pt-px">
                <Icon
                  name={feature.icon}
`}
          <div className="whitespace-pre">
            {`                  className="`}
            {(iconStyles)}
            {`"`}
          </div>
{`                  ios={{ renderingMode: 'hierarchical' }}
                />
              </View>
              <View className="flex-1">
`}
          <div className="whitespace-pre">
            {`                  <Text className="`}
            {(featureTitleStyles)}
            {`">{feature.title}</Text>`}
          </div>
{`                  <Text variant="footnote">{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const FEATURES = [
  {
    title: 'Profile Management',
    description: 'Easily update and manage your personal information, settings, and preferences',
    icon: 'account-circle-outline',
  },
  {
    title: 'Secure Messaging',
    description: 'Chat securely with friends and family in real-time.',
    icon: 'message-processing',
  },
  {
    title: 'Activity Tracking',
    description: 'Monitor your daily activities and track your progress over time.',
    icon: 'chart-timeline-variant',
  },
] as const;
//  oh hi there, how did you get here?
  `}
        </pre>
        {/* <div className="absolute h-full border-r border-dashed right-[42px] top-0"/> */}
        <div className="h-full relative min-h-[28rem] sm:min-h-96 overflow-clip sm:absolute sm:-right-20 sm:mt-2 -mt-24 sm:-mt-32 sm:translate-y-1/4 sm:-translate-x-1/3 lg:translate-x-0 lg:translate-y-0 md:right-0 w-[90vw] max-w-[22rem] sm:w-96 sm:min-w-96 rounded-t-[3rem] sm:rounded-t-[2.5rem] lg:ml-2 border-[6px] border-black/90 dark:border-neutral-800 lg:relative bg-gradient-to-b from-fd-accent/10 via-white/95 to-white dark:from-fd-accent/5 dark:via-fd-card dark:to-fd-card p-6 sm:p-7 pt-20 sm:pt-24 text-start !border-b-0 shadow-2xl shadow-black/10 dark:shadow-black/30">
            
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-[9rem] h-6 bg-black dark:bg-neutral-800 rounded-b-2xl flex items-end justify-center pb-0.5">
              <div className="w-16 h-[3px] rounded-full bg-neutral-600/50 dark:bg-neutral-500/50" />
            </div>
          </div>

          {/* Background Gradient */}
          <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/20 via-cyan-400/10 to-transparent blur-2xl animate-pulse-slow" />
            
            <h1 ref={title} className="duration-500 mb-12 sm:mb-16 text-2xl sm:text-3xl">
              Welcome to the<br/>
              <span ref={Application} className="duration-300 transition-colors">DevOps Interview Hub</span>
            </h1>

            {/* Features List */}
            <div className="flex flex-col gap-5 h-full">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-4 p-2.5 rounded-xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 shadow-sm">
                    {feature.icon}
                  </div>
                  <div className="flex w-full flex-col">
                    {feature.title}
                    <p className="text-[13px] sm:text-sm text-fd-muted-foreground/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}