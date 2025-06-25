'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
    Shield,
    Eye,
    Lock,
} from 'lucide-react'
import { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible'
import { cn } from '@/lib/utils'
import { FadeText } from './ui/fade-text'

const features = [
    {
        title: 'Fixes issues remotely before users even notice',
        description:
            'With built-in Nexus RMM, IT teams can monitor and troubleshoot devices without needing manual intervention.',
        icon: Shield,
        imageUrl: 'https://via.placeholder.com/500x350/3B82F6/FFFFFF?text=Remote+Monitoring',
    },
    {
        title: 'Delivers faster resolutions, anytime',
        description:
            'Always-on, multilingual AI support means employees get help 24/7 boosting digital experience (DEX) and reducing support backlogs.',
        icon: Eye,
        imageUrl: 'https://via.placeholder.com/500x350/10B981/FFFFFF?text=24/7+Support',
    },
    {
        title: 'Reduces workload, improves focus',
        description:
            'Cuts resolution times (MTTR) and ticket volume, so IT teams can focus on strategic work and not repetitive fixes.',
        icon: Lock,
        imageUrl: 'https://via.placeholder.com/500x350/8B5CF6/FFFFFF?text=Improved+Focus',
    },
]

export default function SecurityFeatures() {
    const [openItem, setOpenItem] = useState<string | null>(features[0].title)

    const currentImage = features.find(
        (feature) => feature.title === openItem
    )?.imageUrl

    return (
        <div className="bg-white px-4 pt-12 text-black md:px-24 md:pt-20">
            <div className="mx-auto space-y-8 lg:space-y-10 xl:space-y-12">
                <div className="space-y-4 text-center lg:space-y-5 xl:space-y-6">
                    <motion.h2
                        className="text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
                    >
                        Why IT Teams Love Iceberg?
                    </motion.h2>
                    <motion.p
                        className="text-base text-gray-500 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                    >
                        Empowering IT teams with intelligent automation
                        <span className="block">
                            and proactive support solutions
                        </span>
                    </motion.p>
                </div>

                <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
                    <div className="w-full space-y-2 md:w-1/2 lg:space-y-2.5 xl:space-y-4 2xl:space-y-4">
                        {features.map((feature, index) => (
                            <Collapsible
                                key={index}
                                open={openItem === feature.title}
                                onOpenChange={(isOpen: boolean) => {
                                    setOpenItem(isOpen ? feature.title : null)
                                }}
                                className="overflow-hidden"
                            >
                                <CollapsibleTrigger
                                    className={cn(
                                        'flex w-full items-center gap-4 rounded-t-2xl p-2 text-left transition-colors hover:bg-mainaccent/10 md:w-[85%] lg:p-2.5 xl:w-[90%] xl:p-4',
                                        openItem === feature.title &&
                                            'bg-mainaccent/10',
                                        openItem !== feature.title &&
                                            'hover:rounded-2xl'
                                    )}
                                >
                                    <feature.icon className="size-3 text-mainaccent/60 lg:size-4 xl:size-5" />
                                    <span className="text-base font-medium lg:text-lg xl:text-xl 2xl:text-xl">
                                        {feature.title}
                                    </span>
                                </CollapsibleTrigger>
                                <AnimatePresence>
                                    {openItem === feature.title && (
                                        <CollapsibleContent
                                            forceMount
                                            asChild
                                            className="md:w-[85%] xl:w-[90%]"
                                        >
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: 'auto',
                                                    opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.1,
                                                    ease: 'linear',
                                                }}
                                            >
                                                <div
                                                    className={cn(
                                                        'rounded-b-2xl p-4 pt-0 text-xs leading-normal text-black xl:text-sm 2xl:text-base',
                                                        openItem ===
                                                            feature.title &&
                                                            'bg-mainaccent/10'
                                                    )}
                                                >
                                                    <FadeText
                                                        direction="up"
                                                        framerProps={{
                                                            show: {
                                                                transition: {
                                                                    delay: 0.1,
                                                                },
                                                            },
                                                        }}
                                                        text={
                                                            feature.description
                                                        }
                                                    />
                                                </div>
                                            </motion.div>
                                        </CollapsibleContent>
                                    )}
                                </AnimatePresence>
                            </Collapsible>
                        ))}
                    </div>

                    <div className="relative my-auto h-full w-full overflow-hidden rounded-lg md:w-1/2">
                        <Image
                            className="ml-auto w-full rounded-3xl border border-gray-200 md:h-full md:max-h-[28rem] md:w-fit"
                            src={currentImage || ''}
                            alt="Feature illustration"
                            width={500}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
