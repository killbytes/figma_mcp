import { useState } from 'react';
import classes from './BookmakerCard.module.scss';
import bwinLogo from '@/shared/assets/bwin-logo.svg';
import starIcon from '@/shared/assets/star.svg';
import fireIcon from '@/shared/assets/fire.svg';
import rocketIcon from '@/shared/assets/rocket.svg';
import presentIcon from '@/shared/assets/present.svg';
import angleDownIcon from '@/shared/assets/angle-down.svg';
import unionpayIcon from '@/shared/assets/unionpay.svg';
import maestroIcon from '@/shared/assets/maestro.svg';
import discoverIcon from '@/shared/assets/discover.svg';
import mastercardIcon from '@/shared/assets/mastercard.svg';
import amexIcon from '@/shared/assets/amex.svg';
import maestro2Icon from '@/shared/assets/maestro2.svg';
import frame12Icon from '@/shared/assets/frame12.svg';

const paymentMethods = [
    { name: 'UnionPay', icon: unionpayIcon },
    { name: 'Mastercard', icon: mastercardIcon },
    { name: 'Discover', icon: discoverIcon },
    { name: 'Maestro', icon: maestroIcon },
    { name: 'Amex', icon: amexIcon },
    { name: 'Maestro', icon: maestro2Icon },
    { name: 'Frame12', icon: frame12Icon },
];

const features = [
    'Best odds',
    'Casino',
    '200+ Payment Method',
    'Fast Payouts',
];

const expandedDescription =
    'Potenti placerat in tempor aliquet ut porta fringilla inceptos, massa senectus lacus volutpat morbi felis ultrices, cras nullam commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id fames pulvinar curabitur faucibus. Potenti placerat in tempor aliquet ut porta fringilla inceptos, massa senectus lacus volutpat morbi felis ultrices, cras nullam commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id fames pulvinar curabitur faucibus.';

const prosLeft = [
    'Lorem ipsum dolor sit amet consectetur adipiscing',
    'Lorem ipsum adipiscing',
    'Lorem ipsum dolor sit amet adipiscing.',
    'Lorem ipsum dolor sit amet consectetur adipiscing',
];

const prosRight = [
    'Lorem ipsum dolor sit amet consectetur adipiscing',
    'Lorem ipsum adipiscing',
    'Lorem ipsum dolor sit amet adipiscing.',
    'Lorem ipsum dolor sit amet consectetur adipiscing',
];

export function BookmakerCard({ rank = 1, isExpanded = false }) {
    const [expanded, setExpanded] = useState(isExpanded);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.cardWrapper}>
            {/* BEST BONUS badge for ranks 1 and 2 */}
            {(rank === 1 || rank === 2) && (
                <div className={classes.badge}>
                    <div className={classes.badgeArrows}>
                        <span className={classes.badgeArrowLeft}></span>
                        <span className={classes.badgeArrowRight}></span>
                    </div>
                    <span className={classes.badgeText}>BEST BONUS</span>
                </div>
            )}

            <div className={classes.card}>
                {/* Header */}
                <div className={classes.header}>
                    <div className={classes.headerLeft}>
                        <span className={classes.rankNumber}>{rank}</span>
                        <img src={fireIcon} alt="Fire" className={classes.fireIcon} />
                        <span className={classes.brandName}>BWIN</span>
                    </div>
                    <div className={classes.headerRight}>
                        <span className={classes.rating}>5.0</span>
                        <div className={classes.stars}>
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={starIcon} alt="Star" className={classes.starIcon} />
                            ))}
                        </div>
                    </div>
                    <div className={classes.divider} />
                </div>

                {/* Content */}
                <div className={classes.content}>
                    {/* Logo */}
                    <div className={classes.logoSection}>
                        <div className={classes.logoBg}>
                            <img src={bwinLogo} alt="bwin logo" className={classes.logo} />
                        </div>
                    </div>

                    {/* Bonus Info */}
                    <div className={classes.bonusSection}>
                        <div className={classes.bonusHeader}>
                            <img src={presentIcon} alt="Present" className={classes.presentIcon} />
                            <span className={classes.bonusLabel}>Welcome bonus</span>
                        </div>
                        <h3 className={classes.bonusTitle}>100% Up to 500 $</h3>
                        <p className={classes.bonusDescription}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor, vulputate id fames pulvinar curabitur faucibus.
                        </p>
                    </div>

                    {/* Features */}
                    <div className={classes.featuresSection}>
                        {features.map((feature) => (
                            <div key={feature} className={classes.featureItem}>
                                <img src={rocketIcon} alt="Rocket" className={classes.rocketIcon} />
                                <span className={classes.featureText}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Payments */}
                    <div className={classes.paymentsSection}>
                        <div className={classes.paymentsGrid}>
                            {paymentMethods.map((method, idx) => (
                                <div key={`${method.name}-${idx}`} className={classes.paymentItem}>
                                    <div className={classes.paymentBg}>
                                        <img src={method.icon} alt={method.name} className={classes.paymentIcon} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className={classes.buttonsSection}>
                        <button className={classes.reviewButton}>Read Review</button>
                        <button className={classes.claimButton}>Claim bonus</button>
                    </div>
                </div>

                {/* More info */}
                <div className={classes.moreInfo}>
                    <div className={classes.moreInfoLine} />
                    <button className={classes.moreInfoContent} onClick={handleToggle}>
                        <span className={classes.moreInfoText}>{expanded ? 'Hide info' : 'More info'}</span>
                        <img
                            src={angleDownIcon}
                            alt="Toggle"
                            className={`${classes.angleDownIcon} ${expanded ? classes.angleUp : ''}`}
                        />
                    </button>
                    <div className={classes.moreInfoLine} />
                </div>

                {/* Expanded content */}
                {expanded && (
                    <div className={classes.expandedContent}>
                        <div className={classes.expandedGrid}>
                            {/* Description */}
                            <div className={classes.expandedDescriptionSection}>
                                <p className={classes.expandedDescription}>{expandedDescription}</p>
                            </div>

                            {/* Pros/Cons blocks */}
                            <div className={classes.expandedProsSection}>
                                <div className={classes.prosBlock}>
                                    {prosLeft.map((pro, idx) => (
                                        <div key={`left-${idx}`} className={classes.prosItem}>
                                            <span className={`${classes.prosCheck} ${classes.prosCheckGreen}`}>✓</span>
                                            <span className={classes.prosText}>{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={classes.prosBlock}>
                                    {prosRight.map((pro, idx) => (
                                        <div key={`right-${idx}`} className={classes.prosItem}>
                                            <span className={`${classes.prosCheck} ${classes.prosCheckRed}`}>✗</span>
                                            <span className={classes.prosText}>{pro}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Payments in expanded view */}
                        <div className={classes.expandedPayments}>
                            <div className={classes.expandedPaymentsGrid}>
                                {paymentMethods.map((method, idx) => (
                                    <div key={`exp-${method.name}-${idx}`} className={classes.paymentItem}>
                                        <div className={classes.paymentBg}>
                                            <img src={method.icon} alt={method.name} className={classes.paymentIcon} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
