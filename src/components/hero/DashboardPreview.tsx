'use client';

import { useState, useCallback } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/* ── Stat cards data ── */
interface StatCard {
    id: string;
    label: string;
    value: string;
    icon: string;
    trend?: string;
}

const INITIAL_CARDS: StatCard[] = [
    { id: 'orders', label: 'Total Orders Today', value: '142', icon: '📦', trend: '+12%' },
    { id: 'revenue', label: 'Revenue', value: '₹38,450', icon: '💰', trend: '+8%' },
    { id: 'tables', label: 'Active Tables', value: '8 / 14', icon: '🪑' },
    { id: 'avgtime', label: 'Avg. Order Time', value: '11 min', icon: '⏱️', trend: '-15%' },
];

/* ── Table statuses ── */
const TABLE_STATUSES = [
    { label: 'Available', color: '#2ECC71' },
    { label: 'Occupied', color: '#F59E0B' },
    { label: 'Ordered', color: '#3B82F6' },
    { label: 'Served', color: '#8B5CF6' },
    { label: 'Checkout', color: '#F97316' },
    { label: 'Cleaning', color: '#E74C3C' },
] as const;

const INITIAL_TABLES = [0, 1, 2, 3, 4, 5]; // index into TABLE_STATUSES

/* ── Bar chart data ── */
const CHART_DATA = [
    { label: 'Lunch 12–14', value: 48, max: 72 },
    { label: 'Afternoon 14–17', value: 22, max: 72 },
    { label: 'Dinner 19–22', value: 72, max: 72 },
];

/* ── Sortable card component ── */
function SortableCard({ card }: { card: StatCard }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: card.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isDragging ? 10 : 0,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="flex-1 min-w-0 rounded-lg border border-[#2A2A2A] bg-[#141414] p-3.5 cursor-grab active:cursor-grabbing select-none transition-shadow hover:border-[#B8963E]/40 hover:shadow-lg hover:shadow-[#B8963E]/5"
        >
            <div className="flex items-center justify-between mb-1.5">
                <span className="text-lg">{card.icon}</span>
                {card.trend && (
                    <span className={`text-[10px] font-semibold ${card.trend.startsWith('+') ? 'text-[#2ECC71]' : 'text-[#3B82F6]'}`}>
                        {card.trend}
                    </span>
                )}
            </div>
            <p className="text-[11px] text-[#6B6B6B] mb-0.5 truncate">{card.label}</p>
            <p className="text-base font-bold text-white">{card.value}</p>
        </div>
    );
}

/* ── Main component ── */
export default function DashboardPreview() {
    const [cards, setCards] = useState(INITIAL_CARDS);
    const [tables, setTables] = useState(INITIAL_TABLES);
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setCards((prev) => {
                const oldIndex = prev.findIndex((c) => c.id === active.id);
                const newIndex = prev.findIndex((c) => c.id === over.id);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    }, []);

    const cycleTable = (index: number) => {
        setTables((prev) => {
            const next = [...prev];
            next[index] = (next[index] + 1) % TABLE_STATUSES.length;
            return next;
        });
    };

    return (
        <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-4 shadow-2xl shadow-black/40 w-full max-w-[540px]">
            {/* Header bar */}
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#2ECC71] animate-pulse" />
                    <span className="text-[11px] font-medium text-[#6B6B6B]">Manestro Dashboard</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#E74C3C]/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#2ECC71]/60" />
                </div>
            </div>

            {/* Layer 1 — Draggable stat cards */}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={cards.map((c) => c.id)} strategy={horizontalListSortingStrategy}>
                    <div className="flex gap-2 mb-4">
                        {cards.map((card) => (
                            <SortableCard key={card.id} card={card} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>

            {/* Layer 2 — Table status badges */}
            <div className="mb-4">
                <p className="text-[10px] uppercase tracking-wider text-[#6B6B6B] mb-2 px-1">Table Status</p>
                <div className="grid grid-cols-6 gap-1.5">
                    {tables.map((statusIdx, i) => {
                        const status = TABLE_STATUSES[statusIdx];
                        return (
                            <button
                                key={i}
                                onClick={() => cycleTable(i)}
                                className="flex flex-col items-center gap-1 rounded-lg border border-[#2A2A2A] bg-[#141414] py-2 transition-all hover:border-[#333] active:scale-95"
                            >
                                <div
                                    className="h-2 w-2 rounded-full transition-colors"
                                    style={{ backgroundColor: status.color }}
                                />
                                <span className="text-[10px] font-semibold text-[#9A9A9A]">T{i + 1}</span>
                                <span className="text-[8px] text-[#6B6B6B] truncate w-full text-center px-0.5">
                                    {status.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Layer 3 — Mini bar chart */}
            <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6B6B6B] mb-2 px-1">Orders by Period</p>
                <div className="flex items-end gap-3 h-20 px-1">
                    {CHART_DATA.map((bar, i) => (
                        <div
                            key={i}
                            className="flex-1 flex flex-col items-center gap-1 relative"
                            onMouseEnter={() => setHoveredBar(i)}
                            onMouseLeave={() => setHoveredBar(null)}
                        >
                            {hoveredBar === i && (
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-[#B8963E] px-2 py-0.5 text-[10px] font-semibold text-white whitespace-nowrap z-10">
                                    {bar.value} orders
                                </div>
                            )}
                            <div className="w-full flex items-end" style={{ height: '48px' }}>
                                <div
                                    className="w-full rounded-t transition-all duration-300 hover:opacity-90"
                                    style={{
                                        height: `${(bar.value / bar.max) * 100}%`,
                                        background: `linear-gradient(180deg, #B8963E, #8A6F2E)`,
                                        minHeight: '4px',
                                    }}
                                />
                            </div>
                            <span className="text-[9px] text-[#6B6B6B] text-center leading-tight">{bar.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
