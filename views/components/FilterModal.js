import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const FilterModal = ({
    isVisible,
    onClose,
    selectedStatus,
    setSelectedStatus,
    selectedPriority,
    setSelectedPriority,
    onApplyFilter
}) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            backdropOpacity={0.4}
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Filter Tasks</Text>

                {/* Filter by Status */}
                <Text style={styles.modalSubtitle}>Filter by Status</Text>
                <View style={styles.buttonGroup}>

                    <TouchableOpacity
                        onPress={() => setSelectedStatus('all')}
                        color={selectedStatus === 'all' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedStatus === 'all' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedStatus === 'all' ? '#fff' : 'blue' }}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedStatus('completed')}
                        color={selectedStatus === 'completed' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedStatus === 'completed' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedStatus === 'completed' ? '#fff' : 'blue' }}>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectedStatus('pending')}
                        color={selectedStatus === 'pending' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedStatus === 'pending' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedStatus === 'pending' ? '#fff' : 'blue' }}>Pending</Text>
                    </TouchableOpacity>

                </View>

                {/* Filter by Priority */}
                <Text style={styles.modalSubtitle}>Filter by Priority</Text>
                <View style={styles.buttonGroup}>


                    <TouchableOpacity
                        onPress={() => setSelectedPriority('all')}
                        color={selectedPriority === 'all' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedPriority === 'all' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedPriority === 'all' ? '#fff' : 'blue' }}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedPriority('high')}
                        color={selectedPriority === 'low' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedPriority === 'high' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedPriority === 'high' ? '#fff' : 'blue' }}>High</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedPriority('medium')}
                        color={selectedPriority === 'low' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedPriority === 'medium' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedPriority === 'medium' ? '#fff' : 'blue' }}>Medium</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedPriority('low')}
                        color={selectedPriority === 'low' ? 'blue' : '#000'}
                        style={[
                            styles.editBtn,
                            { backgroundColor: selectedPriority === 'low' ? 'blue' : '#fff' }
                        ]}>
                        <Text style={{ color: selectedPriority === 'low' ? '#fff' : 'blue' }}>Low</Text>
                    </TouchableOpacity>
                </View>

                {/* Apply Filters */}
                <TouchableOpacity
                    onPress={onApplyFilter}
                    style={[
                        styles.editBtn,
                        { backgroundColor: 'blue' }
                    ]}>
                    <Text style={{ color: "#fff", textAlign: 'center' }}>APPLY FILTERS</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    editBtn: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#195ADC',
        margin: 6,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 6
    }
});
